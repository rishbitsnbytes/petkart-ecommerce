import "./cart.css";
import { useCouponsData } from "../../utils";
import { ModalPortal, CouponsModal } from "..";
import { useState } from "react";

const CouponInput = ({ couponAppliedDispatch, totalDiscountedPrice }) => {
  const [showModal, setShowModal] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleRemoveCoupon = () => {
    couponAppliedDispatch({
      type: "COUPON_REMOVE",
    });
    setIsCouponApplied(false);
  };

  return (
    <div className="flex-row flex-justify-between flex-align center flex-wrap w-full py-0-75 gap-1">
      <button
        className="btn btn-secondary py-0-5 px-2 rounded-md"
        onClick={() => setShowModal(true)}
      >
        <span className="mr-1">
          <i className="fa-solid fa-tags"></i>
        </span>
        Apply Coupons
      </button>
      <button
        className={`btn btn-primary py-0-5 px-2 rounded-md ${
          isCouponApplied ? "" : "btn-disabled"
        }`}
        disabled={!isCouponApplied}
        onClick={handleRemoveCoupon}
      >
        <span className="mr-1">
          <i className="fa-solid fa-circle-xmark"></i>
        </span>
        Remove Applied
      </button>
      <ModalPortal isOpen={showModal} onClose={() => setShowModal(false)}>
        <CouponsModal
          couponAppliedDispatch={couponAppliedDispatch}
          setShowModal={setShowModal}
          setIsCouponApplied={setIsCouponApplied}
          totalDiscountedPrice={totalDiscountedPrice}
        />
      </ModalPortal>
    </div>
  );
};

export { CouponInput };
