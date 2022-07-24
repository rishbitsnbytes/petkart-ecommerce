import "./products.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { postToWishlist, deleteFromWishlist } from "../../utils";
import { PawBgPrints, LoadingAnimation, ErrorMessage } from "../../components";
import { useWishlist, useAuth } from "../../contexts";

/* This component accepts 2 props :-  
--> [Optional] - iconButton (Boolean, if need this buttton to be heart icon only)
--> [Mandatory] - product for product details */

const WishlistButton = ({ iconButton, product }) => {
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

  const { _id, staticId } = product;

  const isProductInWishlist = wishlistItems?.find(
    (wishlistItem) => Number(staticId) === Number(wishlistItem.staticId)
  );

  const handleWishlistAdditionRemoval = async (event) => {
    if (iconButton) {
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
      setLoadingState(false);
    } catch (error) {
      wishlistDispatch({
        type: "WISHLIST_ERROR",
        payload: {
          isWishlistLoading: false,
          wishlistError: "Wishlist could not be fetched. Try again.",
        },
      });
      setLoadingState(false);
    }
  };

  return (
    <div>
      {iconButton ? (
        isProductInWishlist ? (
          <button onClick={(event) => handleWishlistAdditionRemoval(event)}>
            <span>
              <i className="fa-solid fa-heart fa-lg" />
            </span>
          </button>
        ) : (
          <button onClick={(event) => handleWishlistAdditionRemoval(event)}>
            <span>
              <i className="fa-regular fa-heart fa-lg" />
            </span>
          </button>
        )
      ) : (
        <button
          className={`btn btn-secondary w-fit py-0-75 px-2 rounded-md align-self-center ${
            loadingState ? "btn-disabled" : ""
          }`}
          onClick={(event) => handleWishlistAdditionRemoval(event)}
          disabled={loadingState}
        >
          {isProductInWishlist ? (
            loadingState ? (
              <span className="mx-0-5">Removing..</span>
            ) : (
              <span className="mx-0-5">
                <i className="fa-solid fa-heart" />
                <span className="mx-0-5">Remove from Wishlist</span>
              </span>
            )
          ) : loadingState ? (
            <span className="mx-0-5">Adding..</span>
          ) : (
            <span>
              <i className="fa-regular fa-heart" />
              <span className="mx-0-5">Add to Wishlist</span>
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export { WishlistButton };
