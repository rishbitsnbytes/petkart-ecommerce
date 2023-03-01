import axios from "axios";

const fetchWishlist = async (wishlistDispatch, authToken) => {
  try {
    const {
      data: { wishlist },
    } = await axios.get("/api/user/wishlist", {
      headers: { authorization: authToken },
    });

    wishlistDispatch({
      type: "UPDATE_WISHLIST",
      payload: {
        wishlistItems: wishlist,
        isWishlistLoading: false,
        wishlistError: null,
      },
    });
  } catch (error) {
    wishlistDispatch({
      type: "UPDATE_WISHLIST",
      payload: {
        isWishlistLoading: false,
        wishlistError:
          "Wishlist could not be fetched due to some server error. Please try again.",
      },
    });
  }
};

export { fetchWishlist };
