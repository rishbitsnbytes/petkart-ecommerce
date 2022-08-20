import "./products.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  postToWishlist,
  deleteFromWishlist,
  deleteFromCart,
} from "../../utils";
import { useToast } from "../../custom-hooks";
import { useWishlist, useAuth, useCart } from "../../contexts";

/* This component accepts 2 props :-  
-->  iconButton - [Optional, Boolean] default is false - (Mention this in prop if need this buttton to be heart icon only)
--> btnFunctionality [Mandatory] (default is "ADD_TO_WISHLIST") - (for different functions such as add to wishlist, move to wishlist )
--> cardButton - [Optional, Boolean] - default is false - Mention this in prop to prevent event propagation and other event default behaviour.
--> product - [Mandatory] -  for product details */

const WishlistButton = ({
  btnFunctionality = "ADD_TO_WISHLIST",
  iconButton = false,
  product = {},
  cardButton = false,
}) => {
  const [loadingState, setLoadingState] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    authState: { authToken, isAuthenticated },
  } = useAuth();
  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cartItems, isCartLoading, cartError },
    cartDispatch,
  } = useCart();
  const { showToast } = useToast();
  const { _id, staticId } = product;

  const isProductInWishlist = wishlistItems?.find(
    (wishlistItem) => Number(wishlistItem.staticId) === Number(staticId)
  );

  const handleWishlistAdditionRemoval = async (event) => {
    if (cardButton) {
      event.preventDefault();
      event.stopPropagation();
    }
    setLoadingState(true);
    if (!isAuthenticated) {
      return navigate("/login", { replace: false, state: { from: pathname } });
    }
    try {
      const {
        data: { wishlist },
      } = isProductInWishlist
        ? await deleteFromWishlist(_id, authToken)
        : await postToWishlist(product, authToken);
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: {
          wishlistItems: wishlist,
          isWishlistLoading: false,
          wishlistError: null,
        },
      });
      showToast(
        isProductInWishlist
          ? "Item removed from wishlist"
          : "Item added to wishlist",
        "success"
      );
      setLoadingState(false);
    } catch (error) {
      wishlistDispatch({
        type: "WISHLIST_ERROR",
        payload: {
          isWishlistLoading: false,
          wishlistError: `Wishlist could not be fetched. Try again. ErrorMessage: ${error}`,
        },
      });
      showToast(
        isProductInWishlist
          ? "Item could not be removed from wishlist. Try again."
          : "Item could not be added to wishlist. Try again.",
        "error"
      );
      setLoadingState(false);
    }
  };

  const handleMoveToWishlist = async (event) => {
    if (cardButton) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!isAuthenticated) {
      return navigate("/login", { replace: false, state: { from: pathname } });
    }
    if (isProductInWishlist) {
      return navigate("/wishlist", { replace: false });
    }
    setLoadingState(true);
    try {
      const {
        data: { wishlist },
      } = await postToWishlist(product, authToken);
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: {
          wishlistItems: wishlist,
          isWishlistLoading: false,
          wishlistError: null,
        },
      });
      // Cart deletion operation inside this same try block for better wishlist or cart error segmentation.
      try {
        const {
          data: { cart },
        } = await deleteFromCart(_id, authToken);
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
            cartError: `Cart could not be updated. Try again. ErrorMessage: ${error}`,
          },
        });
        showToast("Item could not be removed from cart. Try again!", "error");
      }
      showToast("Item moved to wishlist", "success");
      setLoadingState(false);
    } catch (error) {
      wishlistDispatch({
        type: "WISHLIST_ERROR",
        payload: {
          isWishlistLoading: false,
          wishlistError: `Wishlist could not be upadted. Try again. ErrorMessage: ${error}`,
        },
      });
      showToast("Item could not be moved to wishlist. Try again!", "error");
      setLoadingState(false);
    }
  };

  const wishlistButtonMapping = () => {
    switch (btnFunctionality) {
      case "ADD_TO_WISHLIST": {
        return (
          <button
            className={`btn btn-secondary min-w-full h-full rounded-md align-self-center ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleWishlistAdditionRemoval(event)}
            disabled={loadingState}
          >
            {isProductInWishlist ? (
              loadingState ? (
                <span className="mx-0-75">Removing..</span>
              ) : (
                <span className="mx-0-75">
                  <i className="fa-solid fa-heart" />
                  <span className="mx-0-75">Remove From Wishlist</span>
                </span>
              )
            ) : loadingState ? (
              <span className="mx-0-75">Adding..</span>
            ) : (
              <span>
                <i className="fa-regular fa-heart" />
                <span className="mx-0-75">Add To Wishlist</span>
              </span>
            )}
          </button>
        );
      }

      case "MOVE_TO_WISHLIST": {
        return (
          <button
            className={`btn btn-primary min-w-full h-full rounded-md align-self-center ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleMoveToWishlist(event)}
            disabled={loadingState}
          >
            {isProductInWishlist ? (
              loadingState ? (
                <span className="mx-0-75">Moved!</span>
              ) : (
                <span className="mx-0-75">
                  <i className="fa-solid fa-heart" />
                  <span className="mx-0-75">Go To Wishlist</span>
                </span>
              )
            ) : loadingState ? (
              <span className="mx-0-75">Moving..</span>
            ) : (
              <span>
                <i className="fa-regular fa-heart" />
                <span className="mx-0-75">Move To Wishlist</span>
              </span>
            )}
          </button>
        );
      }

      default: {
        return (
          <button
            className={`btn btn-secondary min-w-full h-full rounded-md align-self-center ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleWishlistAdditionRemoval(event)}
            disabled={loadingState}
          >
            {isProductInWishlist ? (
              loadingState ? (
                <span className="mx-0-75">Removing..</span>
              ) : (
                <span className="mx-0-75">
                  <i className="fa-solid fa-heart" />
                  <span className="mx-0-75">Remove from Wishlist</span>
                </span>
              )
            ) : loadingState ? (
              <span className="mx-0-75">Adding..</span>
            ) : (
              <span>
                <i className="fa-regular fa-heart" />
                <span className="mx-0-75">Add to Wishlist</span>
              </span>
            )}
          </button>
        );
      }
    }
  };

  return (
    <div className="w-full h-full">
      {iconButton ? (
        isProductInWishlist ? (
          <button
            className={`${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleWishlistAdditionRemoval(event)}
            disabled={loadingState}
          >
            <span>
              <i className="fa-solid fa-heart fa-lg" />
            </span>
          </button>
        ) : (
          <button
            className={`${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleWishlistAdditionRemoval(event)}
            disabled={loadingState}
          >
            <span>
              <i className="fa-regular fa-heart fa-lg" />
            </span>
          </button>
        )
      ) : (
        wishlistButtonMapping()
      )}
    </div>
  );
};

export { WishlistButton };
