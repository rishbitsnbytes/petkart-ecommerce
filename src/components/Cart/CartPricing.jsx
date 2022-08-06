import "./cart.css";
import { getCartPricing } from "../../utils";
import { useCart } from "../../contexts";
import { CouponInput } from "../../components";
import {
  couponAppliedReducerFunction,
  initialCouponAppliedState,
} from "../../reducers";
import { useReducer } from "react";

const CartPricing = ({ totalCartItems }) => {
  const {
    cartState: { cartItems },
  } = useCart();

  const [couponAppliedState, couponAppliedDispatch] = useReducer(
    couponAppliedReducerFunction,
    initialCouponAppliedState
  );

  const {
    totalMRP,
    totalDiscount,
    totalDiscountPercent,
    totalDiscountedPrice,
    finalDeliveryCharge,
    subtotalAmount,
    couponDiscount,
    totalAmount,
    totalSavings,
  } = getCartPricing(cartItems, couponAppliedState);

  return (
    <section className="cart-price-details-card flex-col flex-justify-start flex-align-start w-full gap-1 rounded-md px-4 py-3 w-full">
      <div className="w-full">
        <p className="h2 text-center font-bold">PRICE DETAILS </p>
        <p className="text-md text-center color-tertiary font-bold">
          {" "}
          {` Total - ${
            cartItems.length > 1
              ? `${cartItems.length} products`
              : `${cartItems.length} product`
          } with ${
            totalCartItems > 1
              ? `${totalCartItems} quantities`
              : `${totalCartItems} quantity`
          }!`}
        </p>
      </div>
      <div className="price-calculations w-full py-0-5">
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Total MRP</p>
          <p className="h4 font-sbold">₹{totalMRP}</p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Total Discount on MRP</p>
          <p className="h4 font-sbold color-tertiary">
            <span className="mx-1 h5">({totalDiscountPercent}%)</span>₹
            {totalDiscount}
          </p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Price After Discount</p>
          <p className="h4 font-sbold color-tertiary">
            ₹{totalDiscountedPrice}
          </p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="h4 font-sbold">Delivery Charges</p>
          {finalDeliveryCharge ? (
            <p className="h4 font-sbold">₹{finalDeliveryCharge}</p>
          ) : (
            <p className="h4 font-sbold flex-row flex-justify-between flex-align-center gap-1">
              <s className="color-faded">₹99</s>
              <span className="h4 font-sbold color-tertiary">FREE</span>
            </p>
          )}
        </div>
        <p className="text-md color-tertiary font-bold">
          (Free delivery on orders above ₹499){" "}
        </p>
      </div>
      <div className="subtotal-amount flex-row flex-justify-between flex-align-center w-full pt-0-5">
        <p className="h3 font-bold">Subtotal Amount</p>
        <p className="h3 font-bold">₹{subtotalAmount}</p>
      </div>

      <CouponInput
        couponAppliedDispatch={couponAppliedDispatch}
        totalDiscountedPrice={totalDiscountedPrice}
      />

      <div className="flex-row flex-justify-between flex-align-center w-full pb-0-5 color-tertiary">
        <p className="h3 font-bold">
          Coupon Discount{" "}
          <span className="h4 font-bold">
            {couponAppliedState.couponAppliedName
              ? `(${couponAppliedState.couponAppliedName})`
              : null}
          </span>
        </p>
        <p className="h3 font-bold">₹{couponDiscount}</p>
      </div>
      <div className="total-amount flex-row flex-justify-between flex-align-center w-full py-1">
        <p className="h3 font-bold">Total Amount</p>
        <p className="h3 font-bold">₹{totalAmount}</p>
      </div>
      <p className="h5 font-sbold color-tertiary py-1">
        You will save ₹{totalSavings} on this order!
      </p>
      <button className="h3 btn btn-primary w-full py-1 my-1 rounded-md">
        Checkout
      </button>
    </section>
  );
};

export { CartPricing };
