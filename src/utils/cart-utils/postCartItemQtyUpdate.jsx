import axios from "axios";

const postCartItemQtyUpdate = async (productId, authToken, actionType) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: actionType } },
    { headers: { authorization: authToken } }
  );
};

export { postCartItemQtyUpdate };
