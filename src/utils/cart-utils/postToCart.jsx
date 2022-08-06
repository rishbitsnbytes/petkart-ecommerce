import axios from "axios";

const postToCart = async (product, authToken) => {
  return axios.post(
    "/api/user/cart",
    { product: { ...product } },
    { headers: { authorization: authToken } }
  );
};

export { postToCart };
