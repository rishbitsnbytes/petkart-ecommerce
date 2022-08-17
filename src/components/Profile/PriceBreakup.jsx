import { getDiscountedPrice } from "../../utils";
import "./profile.css";

const PriceBreakup = ({ order }) => {
  const { orderedItems, priceDetails, couponApplied } = order;
  const {
    finalDeliveryCharge,
    subtotalAmount,
    couponDiscount,
    totalDiscount,
    totalAmount,
    totalSavings,
  } = priceDetails;

  return (
    <div className="price-breakup-card flex-col flex-justify-start flex-align-center w-full gap-2 py-1 px-2">
      <h2 className="color-tertiary">Price Breakup</h2>
      <div className="price-breakup-card flex-col flex-justify-start flex-align-center w-full gap-1 py-1 px-2 mx-auto">
        <div className="flex-col flex-justify-center flex-align-start w-full gap-1">
          {orderedItems.map(({ title, originalMRP, discountPercent, qty }) => (
            <div className="flex-col flex-justify-center flex-align-start w-full">
              <div className="product-details flex-row flex-justify-between flex-align-start gap-2 w-full">
                <p className="text-sm-2 font-thin">
                  {title}
                  <p className="text-sm">
                    (Quantity: {qty} ✕ Price: ₹{" "}
                    {getDiscountedPrice(originalMRP, discountPercent)})
                  </p>
                </p>
                <p className="text-sm-2 font-bold">
                  ₹{qty * getDiscountedPrice(originalMRP, discountPercent)}
                </p>
              </div>
              <div className="product-details flex-row flex-justify-between flex-align-center w-full"></div>
            </div>
          ))}
        </div>
        <hr className="horizontal-line w-full" />
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="text-sm-2 font-bold">Delivery Charges</p>
          {finalDeliveryCharge ? (
            <p className="text-sm-2 font-bold">₹{finalDeliveryCharge}</p>
          ) : (
            <p className="flex-row flex-justify-between flex-align-center gap-1 text-sm-2 font-bold">
              <s className="color-faded">₹99</s>
              <span className="color-tertiary">FREE</span>
            </p>
          )}
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="text-sm-2 font-bold">Subtotal Amount</p>
          <p className="text-sm-2 font-bold">₹{subtotalAmount}</p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="text-sm-2 font-bold">
            Coupon Discount{" "}
            <p className="text-sm font-bold">
              (Coupon Details :
              {couponApplied.couponAppliedName
                ? ` ${couponApplied.couponAppliedName} - ${couponApplied.couponAppliedDescription}`
                : "No Coupon Applied"}
              )
            </p>
          </p>
          <p className="text-sm-2 font-bold color-tertiary">
            ₹{couponDiscount}
          </p>
        </div>
        <div className="flex-row flex-justify-between flex-align-center w-full">
          <p className="text-sm-2 font-bold">Total Discount</p>
          <p className="text-sm-2 font-bold color-tertiary">₹{totalDiscount}</p>
        </div>
        <hr className="horizontal-line w-full" />
        <div className="total flex-row flex-justify-between flex-align-start w-full">
          <p className="h4 font-bold">Order Total</p>

          <p className="h4 font-bold">₹{totalAmount}</p>
        </div>
        <hr className="horizontal-line w-full" />
        <p className="h5 font-sbold color-tertiary align-self-start">
          Yay!! You have saved ₹{totalSavings} on this order!
        </p>
      </div>
    </div>
  );
};

export { PriceBreakup };
