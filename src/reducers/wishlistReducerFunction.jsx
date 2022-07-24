const initialWishlistState = {
  wishlistItems: [],
  isWishlistLoading: false,
  wishlistError: null,
};

const wishlistActionType = {
  UPDATE_WISHLIST: "UPDATE_WISHLIST",
  WISHLIST_ERROR: "WISHLIST_ERROR",
};

const wishlistReducerFunction = (prevWishlistState, { type, payload }) => {
  switch (type) {
    case wishlistActionType.UPDATE_WISHLIST: {
      return {
        ...prevWishlistState,
        wishlistItems: payload.wishlistItems,
        isWishlistLoading: payload.isWishlistLoading,
        wishlistError: payload.wishlistError,
      };
    }

    case wishlistActionType.WISHLIST_ERROR: {
      return {
        ...prevWishlistState,
        isWishlistLoading: payload.isWishlistLoading,
        wishlistError: payload.wishlistError,
      };
    }

    default:
      return { ...prevWishlistState };
  }
};

export { wishlistReducerFunction, initialWishlistState };
