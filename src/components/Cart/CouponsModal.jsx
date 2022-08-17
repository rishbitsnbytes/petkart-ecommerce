import "./cart.css";
import { useCouponsData } from "../../utils";
import { LoadingAnimation, ErrorMessage } from "..";
import { useState } from "react";

const CouponsModal = ({
  couponAppliedDispatch,
  setShowModal,
  setIsCouponApplied,
  totalDiscountedPrice,
}) => {
  const {
    couponsDataState: { couponsData, isCouponsDataLoading, couponsDataError },
  } = useCouponsData();
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleApplyCoupon = (selectedCoupon) => {
    const { couponName, couponType, couponValue, couponDescription } =
      selectedCoupon;
    couponAppliedDispatch({
      type: couponType,
      payload: { couponValue, couponName, couponDescription },
    });
    setIsCouponApplied(true);
    setShowModal(false);
  };

  return (
    <div className="coupon-inputs-modal-content flex-col flex-align-start flex-justify-center gap-2 w-full px-2 py-1">
      <h2 className="h2 align-self-center">
        Apply <span className="color-tertiary">Coupons</span>
      </h2>
      {isCouponsDataLoading ? (
        <LoadingAnimation
          width="15"
          height="15"
          loadingMessage="Coupons are being fetched..."
        />
      ) : couponsDataError ? (
        <ErrorMessage errorMessage={couponsDataError} />
      ) : (
        <div className="flex-col flex-align-center flex-justify-start gap-3 w-full">
          <ul className="flex-col flex-align-center flex-justify-start gap-1 w-full">
            {couponsData.map((coupon) => {
              const {
                _id,
                couponName,
                couponDescription,
                couponType,
                couponValue,
                minCartValue,
              } = coupon;
              const isCouponEligible = totalDiscountedPrice >= minCartValue;
              return (
                <li
                  className={`coupon-input w-full pointer flex-col flex-align-center flex-justify-start rounded-md ${
                    isCouponEligible
                      ? "btn"
                      : "coupon-ineligible cursor-not-allowed"
                  }`}
                  key={_id}
                >
                  <input
                    type="radio"
                    name="couponInputs"
                    value={couponValue}
                    id={_id}
                    onChange={() => setSelectedCoupon(coupon)}
                    disabled={!isCouponEligible}
                  />
                  <label
                    htmlFor={_id}
                    className={`pointer w-full py-1 px-2 rounded-md ${
                      isCouponEligible ? "" : "cursor-not-allowed"
                    }`}
                  >
                    <h3 className="color-tertiary w-full">{couponName}</h3>
                    <p>{couponDescription}</p>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="flex-row flex-justify-end flex-align-center w-full gap-3">
            <button
              className="btn btn-primary px-2 py-0-5 rounded-md w-20-pc"
              onClick={() => handleApplyCoupon(selectedCoupon)}
            >
              Apply
            </button>
            <button
              className="btn btn-secondary px-2 py-0-5 rounded-md w-20-pc"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { CouponsModal };
