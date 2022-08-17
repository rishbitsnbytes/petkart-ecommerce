import axios from "axios";

const clearCart = (authToken) => {
  return axios.get("/api/user/cart/clear", {
    headers: { authorization: authToken },
  });
};

export { clearCart };
