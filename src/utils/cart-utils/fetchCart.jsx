import axios from "axios";

const fetchCart = async (cartDispatch, authToken) => {
  try {
    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: { authorization: authToken },
    });
    cartDispatch({
      type: "UPDATE_CART",
      payload: {
        cartItems: cart,
        isCartLoading: false,
        cartError: null,
      },
    });
  } catch (error) {
    cartDispatch({
      type: "CART_ERROR",
      payload: {
        isCartLoading: false,
        cartError: `Cart could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
      },
    });
  }
};

export { fetchCart };
