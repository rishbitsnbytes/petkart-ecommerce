import axios from "axios";

const deleteFromWishlist = async (productId, authToken) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: authToken },
  });
};

export { deleteFromWishlist };
