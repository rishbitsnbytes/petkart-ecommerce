import { createContext, useContext, useEffect, useReducer } from "react";
import { initialWishlistState, wishlistReducerFunction } from "../reducers";
import { useAuth } from "../contexts";
import { fetchWishlist } from "../utils";

const WishlistContext = createContext(initialWishlistState);

const WishlistProvider = ({ children }) => {
  const {
    authState: { isAuthenticated, authToken },
  } = useAuth();

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducerFunction);

  useEffect(() => {
    if (isAuthenticated) {
      fetchWishlist(wishlistDispatch, authToken);
    }
  }, [isAuthenticated]);

  return (
    <WishlistContext.Provider
      value={{ wishlistState: { ...wishlistState }, wishlistDispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
