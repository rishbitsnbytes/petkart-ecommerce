const initialCheckoutDataState = {
  orderedItems: [],
  priceDetails: {},
  deliveryAddress: {},
  couponApplied: {},
};

const checkoutDataActionTypes = {
  CHECKOUT_DATA_UPDATE: "CHECKOUT_DATA_UPDATE",
  CHECKOUT_DELIVERY_ADDRESS_UPDATE: "CHECKOUT_DELIVERY_ADDRESS_UPDATE",
};

const checkoutDataReducerFunction = (
  prevCheckoutDataState,
  {
    type,
    payload: { orderedItems, priceDetails, couponApplied, deliveryAddress },
  }
) => {
  switch (type) {
    case checkoutDataActionTypes.CHECKOUT_DATA_UPDATE: {
      return {
        ...prevCheckoutDataState,
        orderedItems: orderedItems,
        priceDetails: priceDetails,
        couponApplied: couponApplied,
      };
    }

    case checkoutDataActionTypes.CHECKOUT_DELIVERY_ADDRESS_UPDATE: {
      return {
        ...prevCheckoutDataState,
        deliveryAddress: deliveryAddress,
      };
    }

    default:
      return { ...initialCheckoutDataState };
  }
};

export { checkoutDataReducerFunction, initialCheckoutDataState };
