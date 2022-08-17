import { useAuth, useCart, useWishlist } from "../../contexts";
import { useNavigate, useLocation } from "react-router-dom";
import { postToCart, deleteFromCart, deleteFromWishlist } from "../../utils";
import { useState } from "react";

/* This component accepts 2 props :-  
--> btnFunctionality [Mandatory] (default is "ADD_TO_CART") - (for different functions such as add to cart, move to cart, remove from cart )
--> cardButton - [Optional, Boolean] - default is false - Mention this in prop to prevent event propagation and other event default behaviour.
-->  product - [Mandatory] - for product details */

const CartButton = ({
  btnFunctionality = "ADD_TO_CART",
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
    cartState: { cartItems, isCartLoading, cartError },
    cartDispatch,
  } = useCart();
  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();

  const {
    _id,
    staticId,
    availability: { newArrival, inStock },
  } = product;

  const isProductInCart = cartItems?.find(
    (cartItem) => Number(cartItem.staticId) === Number(staticId)
  );

  const handleAddToCart = async (event) => {
    if (cardButton) {
      event.preventDefault();
      event.stopPropagation();
    }
    setLoadingState(true);
    if (!isAuthenticated) {
      return navigate("/login", { replace: false, state: { from: pathname } });
    }
    if (isProductInCart) {
      return navigate("/cart", { replace: false });
    }
    try {
      const {
        data: { cart },
      } = await postToCart(product, authToken);
      cartDispatch({
        type: "UPDATE_CART",
        payload: {
          cartItems: cart,
          isCartLoading: false,
          cartError: null,
        },
      });
      setLoadingState(false);
    } catch (error) {
      cartDispatch({
        type: "CART_ERROR",
        payload: {
          isCartLoading: false,
          cartError: `Cart could not be updated. Try again. ErrorMessage: ${error}`,
        },
      });
      setLoadingState(false);
    }
  };

  const handleMoveToCart = async (event) => {
    if (cardButton) {
      event.preventDefault();
      event.stopPropagation();
    }
    setLoadingState(true);
    if (!isAuthenticated) {
      return navigate("/login", { replace: false, state: { from: pathname } });
    }
    if (isProductInCart) {
      return navigate("/cart", { replace: false });
    }
    try {
      const {
        data: { cart },
      } = await postToCart(product, authToken);
      cartDispatch({
        type: "UPDATE_CART",
        payload: {
          cartItems: cart,
          isCartLoading: false,
          cartError: null,
        },
      });
      // Deletion from Wishlist operation inside this same try block for better Wishlist or Cart error segmentation.
      try {
        const {
          data: { wishlist },
        } = await deleteFromWishlist(_id, authToken);
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
          type: "WISHLIST_ERROR",
          payload: {
            isWishlistLoading: false,
            wishlistError: `Wishlist could not be updated, Try again. ErrorMessage: ${error}`,
          },
        });
      }
      setLoadingState(false);
    } catch (error) {
      cartDispatch({
        type: "CART_ERROR",
        payload: {
          isCartLoading: false,
          cartError: `Cart could not be updated. Try again. ErrorMessage: ${error}`,
        },
      });
      setLoadingState(false);
    }
  };

  const handleRemoveFromCart = async (event) => {
    if (cardButton) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!isAuthenticated) {
      return navigate("/login", { replace: false, state: { from: pathname } });
    }
    setLoadingState(true);
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
      setLoadingState(false);
    }
  };

  const cartButtonMapping = () => {
    switch (btnFunctionality) {
      case "ADD_TO_CART": {
        return (
          <button
            className={`btn btn-primary w-full h-full rounded-md align-self-center  ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${inStock ? "" : "btn-disabled"} ${
              loadingState ? "btn-disabled cursor-progress" : ""
            }`}
            disabled={!inStock || loadingState}
            onClick={(event) => handleAddToCart(event)}
          >
            {inStock ? (
              isProductInCart ? (
                <span>
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="mx-0-75">Go To Cart</span>
                </span>
              ) : loadingState ? (
                <span className="mx-0-75">Adding...</span>
              ) : (
                <span>
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="mx-0-75">Add To Cart</span>
                </span>
              )
            ) : (
              <span>
                <i className="fa-regular fa-face-frown"></i>
                <span className="mx-0-75">Out Of Stock</span>
              </span>
            )}
          </button>
        );
      }

      case "MOVE_TO_CART": {
        return (
          <button
            className={`btn btn-primary w-full h-full rounded-md align-self-center  ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${inStock ? "" : "btn-disabled"} ${
              loadingState ? "btn-disabled cursor-progress" : ""
            }`}
            disabled={!inStock || loadingState}
            onClick={(event) => handleMoveToCart(event)}
          >
            {inStock ? (
              isProductInCart ? (
                loadingState ? (
                  <span className="mx-0-75">Moved!</span>
                ) : (
                  <span>
                    <i className="fa-solid fa-cart-shopping" />
                    <span className="mx-0-75">Go To Cart</span>
                  </span>
                )
              ) : loadingState ? (
                <span className="mx-0-75">Moving...</span>
              ) : (
                <span>
                  <i className="fa-solid fa-cart-plus" />
                  <span className="mx-0-75">Move To Cart</span>
                </span>
              )
            ) : (
              <span>
                <i className="fa-regular fa-face-frown"></i>
                <span className="mx-0-75">Out Of Stock</span>
              </span>
            )}
          </button>
        );
      }

      case "REMOVE_FROM_CART": {
        return (
          <button
            className={`btn btn-secondary w-full h-full rounded-md align-self-center ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${loadingState ? "btn-disabled cursor-progress" : ""}`}
            onClick={(event) => handleRemoveFromCart(event)}
            disabled={loadingState}
          >
            {loadingState ? (
              <span className="mx-0-75">Removing...</span>
            ) : (
              <span>
                <i className="fa-solid fa-trash" />
                <span className="mx-0-75">Remove From Cart</span>
              </span>
            )}
          </button>
        );
      }

      default:
        return (
          <button
            className={`btn btn-primary w-full h-full rounded-md align-self-center ${
              cardButton ? "py-0-5 px-1" : "py-0-75 px-2"
            } ${inStock ? "" : "btn-disabled"}`}
            disabled={!inStock}
          >
            {inStock ? (
              isProductInCart ? (
                <span>
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="mx-0-75">Go to Cart</span>
                </span>
              ) : (
                <span>
                  <i className="fa-solid fa-cart-plus" />
                  <span className="mx-0-75">Add To Cart</span>
                </span>
              )
            ) : (
              <span>
                <i className="fa-regular fa-face-frown"></i>
                <span className="mx-0-75">Out of Stock</span>
              </span>
            )}
          </button>
        );
    }
  };

  return <div className="w-full h-full">{cartButtonMapping()}</div>;
};

export { CartButton };
