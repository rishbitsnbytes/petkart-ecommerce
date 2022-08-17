const initialOrdersState = {
  orders: [],
  areOrdersLoading: true,
  ordersError: null,
};

const ordersActionTypes = {
  ORDERS_UPDATE: "ORDERS_UPDATE",
  ORDERS_ERROR: "ORDERS_ERROR",
};

const ordersReducerFunction = (
  prevOrdersState,
  { type, payload: { orders, areOrdersLoading, ordersError } }
) => {
  switch (type) {
    case ordersActionTypes.ORDERS_UPDATE: {
      return {
        ...prevOrdersState,
        orders: orders,
        areOrdersLoading: areOrdersLoading,
        ordersError: ordersError,
      };
    }

    case ordersActionTypes.ORDERS_ERROR: {
      return {
        ...prevOrdersState,
        areOrdersLoading: false,
        ordersError: ordersError,
      };
    }

    default:
      return { ...prevOrdersState };
  }
};

export { ordersReducerFunction, initialOrdersState };
