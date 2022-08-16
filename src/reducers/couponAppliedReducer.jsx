const initialCouponAppliedState = {
  couponApplied: {
    couponDiscountPercent: 0,
    couponDiscountFlatAmount: 0,
  },
  couponAppliedType: "",
  couponAppliedName: "",
};

const couponAppliedActionTypes = {
  COUPON_PERCENT_DISCOUNT: "COUPON_PERCENT_DISCOUNT",
  COUPON_FLAT_DISCOUNT: "COUPON_FLAT_DISCOUNT",
  COUPON_REMOVE: "COUPON_REMOVE",
};

const couponAppliedReducerFunction = (
  prevCouponAppliedState,
  { type, payload }
) => {
  switch (type) {
    case couponAppliedActionTypes.COUPON_PERCENT_DISCOUNT: {
      return {
        ...prevCouponAppliedState,
        couponApplied: {
          ...prevCouponAppliedState.couponApplied,
          couponDiscountPercent: payload.couponValue,
        },
        couponAppliedType: "COUPON_PERCENT_DISCOUNT",
        couponAppliedName: payload.couponName,
      };
    }

    case couponAppliedActionTypes.COUPON_FLAT_DISCOUNT: {
      return {
        ...prevCouponAppliedState,
        couponApplied: {
          ...prevCouponAppliedState.couponApplied,
          couponDiscountFlatAmount: payload.couponValue,
        },
        couponAppliedType: "COUPON_FLAT_DISCOUNT",
        couponAppliedName: payload.couponName,
      };
    }

    case couponAppliedActionTypes.COUPON_REMOVE: {
      return initialCouponAppliedState;
    }

    default:
      return initialCouponAppliedState;
  }
};

export { couponAppliedReducerFunction, initialCouponAppliedState };
