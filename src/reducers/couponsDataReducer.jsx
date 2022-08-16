const initialCouponsDataState = {
  couponsData: [],
  isCouponsDataLoading: true,
  couponsDataError: null,
};

const couponsDataActionTypes = {
  COUPONS_DATA_UPDATE: "COUPONS_DATA_UPDATE",
  COUPONS_DATA_ERROR: "COUPONS_DATA_ERROR",
};

const couponsDataReducerFunction = (
  prevCouponsDataState,
  { type, payload }
) => {
  switch (type) {
    case couponsDataActionTypes.COUPONS_DATA_UPDATE: {
      return {
        ...prevCouponsDataState,
        couponsData: payload,
        isCouponsDataLoading: false,
        couponsDataError: null,
      };
    }

    case couponsDataActionTypes.COUPONS_DATA_ERROR: {
      return {
        ...prevCouponsDataState,
        isCouponsDataLoading: false,
        couponDataError: payload,
      };
    }

    default:
      return initialCouponsDataState;
  }
};

export { couponsDataReducerFunction, initialCouponsDataState };
