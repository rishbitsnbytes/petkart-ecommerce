const initialCartState = {
  cartItems: [],
  isCartLoading: true,
  cartError: null,
};

const cartActionTypes = {
  UPDATE_CART: "UPDATE_CART",
  CART_ERROR: "CART_ERROR",
};

const cartReducerFunction = (prevCartState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.UPDATE_CART: {
      return {
        ...prevCartState,
        cartItems: payload.cartItems,
        isCartLoading: payload.isCartLoading,
        cartError: payload.cartError,
      };
    }
    case cartActionTypes.CART_ERROR: {
      return {
        ...prevCartState,
        isCartLoading: payload.isCartLoading,
        cartError: payload.cartError,
      };
    }
  }
};

export { cartReducerFunction, initialCartState };
