import "./profile.css";
import { ModalPortal, PriceBreakup } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getFullImgUrl, getDiscountedPrice } from "../../utils";

const OrderSummaryCard = ({ order }) => {
  const [showModal, setShowModal] = useState(false);
  const { orderedItems, orderId, priceDetails, createdAt, deliveryAddress } =
    order;
  const { totalAmount } = priceDetails;

  return (
    <div className="order-summary-card px-5 py-3 rounded-md flex-col flex-justify-start flex-align-start w-60-pc gap-3 h-full">
      <div className="address-details flex-col flex-justify-center flex-align-center gap-2">
        <p className="h2 color-tertiary font-bold w-full">Order Confirmed!</p>
        <div className="flex-row flex-justify-start flex-align-center w-full gap-2">
          <p className="order-desc-titles text-md font-bold">OrderID : </p>
          <p>{orderId}</p>
        </div>
        <div className="flex-row flex-justify-start flex-align-center w-full gap-2">
          <p className="order-desc-titles text-md font-bold">Order Date : </p>
          <p>{Date(createdAt)}</p>
        </div>

        <div className="flex-row flex-justify-start flex-align-center w-full gap-2">
          <div className="flex-row flex-justify-start flex-align-center gap-2">
            <p className="order-desc-titles text-md font-bold">
              Order Total :{" "}
            </p>
            <p className=" text-lg font-bold color-primary">₹{totalAmount}</p>
          </div>
          <button
            className="btn btn-secondary px-1 py-0-5 rounded-md"
            onClick={() => setShowModal(true)}
          >
            <span className="mr-1">
              <i className="fa-solid fa-money-check-dollar"></i>
            </span>
            View Breakup
          </button>
          <ModalPortal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            width="w-60-pc"
          >
            <PriceBreakup order={order} />
          </ModalPortal>
        </div>
        <div className="flex-row flex-justify-start flex-align-start gap-2 w-full">
          <p className="order-desc-titles text-md font-bold">Ship to : </p>
          <div className="flex-col flex-justify-center flex-align-start w-full">
            <p>{deliveryAddress.fullName}</p>
            <p>{deliveryAddress.addressLine}</p>
            <p>
              {deliveryAddress.state} {deliveryAddress.city}{" "}
              {deliveryAddress.pincode}
            </p>
            <p>{deliveryAddress.phoneNumber}</p>
          </div>
        </div>
      </div>
      {orderedItems.map(
        ({
          title,
          qty,
          originalMRP,
          discountPercent,
          staticId,
          imgUrl,
          _id,
        }) => (
          <Link
            className="product-card flex-row flex-justify-start flex-align-start w-full h-20 gap-2 px-2 py-1 rounded-md"
            to={`/products/${staticId}`}
            key={_id}
          >
            <img
              src={getFullImgUrl(imgUrl, title)}
              alt={title}
              className="w-20-pc h-full align-self-center"
            />
            <div className="product-details w-full flex-col flex-justify-between flex-align-start gap-1 min-h-full p-1">
              <p>{title}</p>
              <p>Quantity : {qty}</p>
              <div className="flex-row flex-justify-start flex-align-center w-full gap-5">
                <p>
                  Product Price : ₹
                  {getDiscountedPrice(originalMRP, discountPercent)}
                </p>
                <p>
                  Product Total : ₹
                  {qty * getDiscountedPrice(originalMRP, discountPercent)}
                </p>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export { OrderSummaryCard };
