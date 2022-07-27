import axios from "axios";

const postToWishlist = async (product, authToken) => {
  return axios.post(
    "/api/user/wishlist",
    { product: { ...product } },
    {
      headers: { authorization: authToken },
    }
  );
};

export { postToWishlist };
