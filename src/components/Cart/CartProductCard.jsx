import "./cart.css";
import { CartButton, WishlistButton } from "../../components";
import {
  getDiscountedPrice,
  getFullImgUrl,
  postCartItemQtyUpdate,
} from "../../utils";
import { useAuth, useCart } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartProductCard = ({ product }) => {
  const [loadingState, setLoadingState] = useState(false);
  const {
    authState: { authToken },
  } = useAuth();
  const { showToast } = useToast();
  const { cartDispatch } = useCart();
  const {
    _id,
    staticId,
    title,
    originalMRP,
    discountPercent,
    brand,
    imgUrl,
    qty,
  } = product;

  const updateCartItemsQty = async (productId, authToken, actionType) => {
    setLoadingState(true);
    try {
      const {
        data: { cart },
      } = await postCartItemQtyUpdate(productId, authToken, actionType);
      cartDispatch({
        type: "UPDATE_CART",
        payload: {
          cartItems: cart,
          isCartLoading: false,
          cartError: null,
        },
      });
      showToast("Item quantity updated.", "success");
      setLoadingState(false);
    } catch (error) {
      cartDispatch({
        type: "CART_ERROR",
        payload: {
          isCartLoading: false,
          cartError: `Cart could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
        },
      });
      setLoadingState(false);
    }
  };

  const handleCartItemQtyChange = (event, actionType) => {
    event.preventDefault();
    event.stopPropagation();
    switch (actionType) {
      case "INCREMENT": {
        return updateCartItemsQty(_id, authToken, "increment");
      }
      case "DECREMENT": {
        return updateCartItemsQty(_id, authToken, "decrement");
      }
      default:
        return;
    }
  };

  return (
    <div className="cart-product-card flex-row flex-justify-evenly flex-align-center gap-1 w-full h-fit rounded-md">
      <div className="w-30-pc h-full">
        <Link to={`/products/${staticId}`}>
          <img
            src={getFullImgUrl(imgUrl, title)}
            alt={title}
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className="cart-card-product-details w-60-pc h-full flex-col flex-justify-evenly flex-align-start gap-1 py-2 px-1">
        <div className="cart-card-product-heads">
          <Link to={`/products/${staticId}`}>
            <p className="text-md font-bold">{title}</p>
            <p className="h6 color-faded">{brand}</p>
          </Link>
        </div>
        <div className="cart-card-price-container">
          <div>
            <p className="h2 color-primary font-bold inline mr-1">
              ₹{getDiscountedPrice(originalMRP, discountPercent)}
            </p>
            <p className="text-md color-faded inline">
              <s>₹{originalMRP}</s>
            </p>
          </div>
          <div>
            <p className="text-sm-2 inline color-tertiary mr-1">
              {discountPercent}% off
            </p>
            <p className="text-sm-2 inline color-tertiary">
              You save : ₹
              {originalMRP - getDiscountedPrice(originalMRP, discountPercent)}
            </p>
          </div>
        </div>
        <div className="flex-col flex-justify-center flex-align-start">
          <div
            className={`item-qty-btns flex-row flex-justify-start flex-align-center w-fit gap-2 my-0-75 h-3 relative ${
              loadingState ? "btn-disabled cursor-progress" : ""
            }`}
          >
            <button
              className={`btn h1 ${qty <= 1 ? "btn-disabled" : ""} ${
                loadingState ? "btn-disabled cursor-progress" : ""
              }`}
              onClick={(event) => handleCartItemQtyChange(event, "DECREMENT")}
              disabled={qty <= 1 || loadingState}
            >
              <span className="color-primary">
                <i className="fa-solid fa-circle-minus"></i>
              </span>
            </button>
            <p className="w-3 text-xl text-center color-tertiary font-bold">
              {qty}
            </p>
            <button
              className={`btn h1 ${qty >= 10 ? "btn-disabled" : ""} ${
                loadingState ? "btn-disabled cursor-progress" : ""
              }`}
              onClick={(event) => handleCartItemQtyChange(event, "INCREMENT")}
              disabled={qty >= 10 || loadingState}
            >
              <span className="color-primary">
                <i className="fa-solid fa-circle-plus"></i>
              </span>
            </button>
            <span className="tooltip absolute text-sm text-center w-15 h-fit mx-1-5 px-1 py-0-5 rounded-md">
              {`For each product
              Minimum quantity can be 1
              Maximum can be 10`}
            </span>
          </div>
          <p className="color-tertiary text-sm-2 font-bold">
            {`Product Total for ${qty} item(s) is ₹${
              qty * getDiscountedPrice(originalMRP, discountPercent)
            }`}
          </p>
        </div>

        <div className="flex-col flex-justify-center flex-align-start w-60-pc gap-1 mt-1">
          <WishlistButton
            btnFunctionality="MOVE_TO_WISHLIST"
            product={product}
            cardButton
          />
          <CartButton
            btnFunctionality="REMOVE_FROM_CART"
            product={product}
            cardButton
          />
        </div>
      </div>
    </div>
  );
};

export { CartProductCard };
