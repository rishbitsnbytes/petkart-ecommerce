import "./checkout.css";
import {
  useAddresses,
  useCheckout,
  useAuth,
  useOrders,
  useCart,
} from "../../contexts";
import {
  AddressCard,
  AddNewAddressButton,
  LoadingAnimation,
} from "../../components";
import {
  getCartTotalItems,
  loadScript,
  postNewOrder,
  clearCart,
} from "../../utils";
import petkartLogo from "../../../src/assets/others/petkart-logo-gif.gif";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const RAZORPAY_SCRIPT_URL = "https://checkout.razorpay.com/v1/checkout.js";

const CheckoutMain = () => {
  const [loadingState, setLoadingState] = useState(false);
  const {
    addressesState: { addresses },
  } = useAddresses();
  const {
    authState: { authToken, user },
  } = useAuth();
  const { firstName, lastName, email } = user;
  const { ordersDispatch } = useOrders();
  const { cartDispatch } = useCart();
  const {
    checkoutData: {
      orderedItems,
      priceDetails,
      couponApplied,
      deliveryAddress,
    },
    checkoutDataDispatch,
  } = useCheckout();
  const { totalAmount, totalSavings } = priceDetails;
  const [selectedAddress, setSelectedAddress] = useState(null);
  const totalCartItems = getCartTotalItems(orderedItems);
  const navigate = useNavigate();

  const handleAddressSelection = (address) => {
    setSelectedAddress(() => {
      return { ...address };
    });
  };

  if (orderedItems.length === 0) {
    navigate("/cart");
  }

  useEffect(() => {
    checkoutDataDispatch({
      type: "CHECKOUT_DELIVERY_ADDRESS_UPDATE",
      payload: { deliveryAddress: { ...selectedAddress } },
    });
  }, [selectedAddress]);

  const handleDisplayRazorpay = async () => {
    const isScriptLoaded = await loadScript(RAZORPAY_SCRIPT_URL);

    if (!isScriptLoaded) {
      console.log("log-error:- Razorpay Script Loading Error Occured");
      return;
    }

    var options = {
      key: process.env.REACT_APP_RAZORPAY_TEST_KEY_ID,
      amount: (totalAmount * 100).toString(),
      currency: "INR",
      name: "PETKART",
      description: "Thank You For Shopping with PETKART",
      image: petkartLogo,
      prefill: {
        name: firstName + lastName,
        email: email,
        contact: deliveryAddress.phoneNumber,
      },
      theme: {
        color: "#A2D5AB",
      },
      handler: async function (response) {
        const { razorpay_payment_id } = await response;
        const order = {
          razorpayPaymentID: razorpay_payment_id,
          orderId: uuid(),
          orderedItems: orderedItems,
          priceDetails: priceDetails,
          couponApplied: couponApplied,
          deliveryAddress: deliveryAddress,
        };
        placeOrder({ ...order });
      },
    };

    const razorpayPaymentObject = new window.Razorpay(options);
    razorpayPaymentObject.open();
  };

  const placeOrder = async (order) => {
    setLoadingState(true);
    try {
      const {
        data: { orders },
      } = await postNewOrder(order, authToken);
      ordersDispatch({
        type: "ORDERS_UPDATE",
        payload: {
          orders: orders,
          areOrdersLoading: false,
          ordersError: null,
        },
      });
      try {
        const {
          data: { cart },
        } = await clearCart(authToken);
        cartDispatch({
          type: "UPDATE_CART",
          payload: {
            cartItems: cart,
            isCartLoading: false,
            cartError: null,
          },
        });
      } catch (error) {
        cartDispatch({
          type: "UPDATE_CART",
          payload: {
            isCartLoading: false,
            cartError: `Cart could not be cleared due to some network error. Please try again. ErrorMessage: ${error}`,
          },
        });
      }
      setLoadingState(false);
      navigate(`/order-summary/${order.orderId}`, { replace: true });
    } catch (error) {
      ordersDispatch({
        type: "ORDERS_ERROR",
        payload: {
          areOrdersLoading: false,
          ordersError: `Order could not be placed due to some network error. Please try again, ErrorMessage: ${error}`,
        },
      });
      setLoadingState(false);
    }
  };

  return (
    <main className="checkout-page-main flex-col flex-justify-start flex-align-center gap-5 m-1 px-5 py-2 h-full relative">
      <h1 className="color-tertiary font-bold">Checkout</h1>
      {loadingState ? (
        <div className="w-full">
          <LoadingAnimation
            width="20"
            height="20"
            loadingMessage="Order is being created.."
          />
        </div>
      ) : (
        <section className="grid grid-50-50-layout grid-cols-2 grid-rows-1 m-1 gap-5 w-full">
          <section className="address-selection-section flex-col flex-justify-start flex-align-start gap-3 w-80-pc mx-auto h-fit">
            <div className="flex-row flex-justify-between flex-align-center w-full gap-1">
              <h1>Select Shipping Address</h1>
              <div className="add-new-address-btn w-fit relative">
                <AddNewAddressButton iconButton />
                <span className="tooltip absolute text-sm text-center h-fit mx-1 w-10 px-1 py-0-5 rounded-md">
                  {`Add New Address`}
                </span>
              </div>
            </div>
            <ul className="flex-col flex-align-center flex-justify-start gap-2 w-full">
              {addresses.map((address) => {
                return (
                  <li
                    className="w-full pointer flex-col flex-align-center flex-justify-start rounded-md"
                    key={address._id}
                  >
                    <input
                      type="radio"
                      name="address-card"
                      value={address}
                      id={address._id}
                      onChange={() => handleAddressSelection(address)}
                    />
                    <label
                      htmlFor={address._id}
                      className="address-card-label cursor-pointer w-full rounded-md"
                    >
                      <AddressCard address={address} iconCard />
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="w-85-pc mx-auto">
            <section className="checkout-order-details-card flex-col flex-justify-start flex-align-start w-full gap-0-5 rounded-md px-4 py-3 w-full">
              <div className="w-full">
                <p className="h3 text-center font-bold">Order Details </p>
                <p className="text-md text-center color-tertiary font-bold">
                  {" "}
                  {` Total - ${
                    orderedItems.length > 1
                      ? `${orderedItems.length} products`
                      : `${orderedItems.length} product`
                  } with ${
                    totalCartItems > 1
                      ? `${totalCartItems} quantities`
                      : `${totalCartItems} quantity`
                  }!`}
                </p>
              </div>
              <hr className="horizontal-line w-full" />
              <div className="flex-col flex-justify-center flex-align-start w-full gap-1">
                <div className="flex-row flex-justify-between flex-align-center w-full">
                  <p className="h4 font-sbold">Product</p>
                  <p className="h4 font-sbold">Quantity</p>
                </div>
                <hr className="horizontal-line w-full" />

                <div className="flex-col flex-justify-center flex-align-start w-full gap-1">
                  {orderedItems.map(({ title, qty, _id }) => {
                    return (
                      <div
                        className="flex-row flex-justify-between flex-align-center w-full"
                        key={_id}
                      >
                        <p className="h5 font-sbold w-70-pc">{title}</p>
                        <p className="h5 font-sbold">{qty}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="horizontal-line w-full" />
              <div className="w-full">
                <p className="h3 text-center font-bold">Price Details</p>
              </div>
              <hr className="horizontal-line w-full" />
              <div className="total-amount flex-row flex-justify-between flex-align-center w-full py-0-5">
                <p className="h3 font-bold">Total Amount</p>
                <p className="h3 font-bold">₹{totalAmount}</p>
              </div>
              <p className="h5 font-sbold color-tertiary">
                You will save ₹{totalSavings} on this order!
              </p>
              <hr className="horizontal-line w-full" />

              <div className="w-full py-0-5">
                <p className="h3 text-center font-bold">Shipping Details</p>
              </div>
              <hr className="horizontal-line w-full" />
              <div className="w-full">
                {selectedAddress ? (
                  <div className="w-full flex-col flex-justify-center flex-align-start">
                    <p>{selectedAddress.fullName}</p>
                    <p>{selectedAddress.addressLine}</p>
                    <p>
                      {selectedAddress.state} {selectedAddress.city}{" "}
                      {selectedAddress.pincode}
                    </p>
                    <p>{selectedAddress.phoneNumber}</p>
                  </div>
                ) : (
                  <p>Please Select the Shipping Address to Place the Order</p>
                )}
              </div>
              <button
                className={`h3 btn btn-primary w-full py-1 my-1 rounded-md ${
                  selectedAddress ? "" : "btn-disabled cursor-not-allowed"
                }`}
                disabled={!selectedAddress || loadingState}
                onClick={handleDisplayRazorpay}
              >
                Place Order
              </button>
            </section>
          </section>
        </section>
      )}
    </main>
  );
};

export { CheckoutMain };
