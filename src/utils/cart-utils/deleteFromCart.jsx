import axios from "axios";

const deleteFromCart = (productId, authToken) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: authToken },
  });
};

export { deleteFromCart };
