import "./products.css";
import { getDiscountedPrice, getFullImgUrl } from "../../utils";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    subtitle,
    originalMRP,
    discountPercent,
    totalStars,
    totalRatings,
    brand,
    availability: { newArrival, inStock },
    imgUrl,
  } = product;

  return (
    <div>
      <Link to={`/products/${_id}`}>
        <div className="card-container w-25 h-full relative flex-col flex-justify-between flex-align-center rounded-md">
          <img
            src={getFullImgUrl(imgUrl, title)}
            alt={title}
            className="w-full h-25 rounded-md"
          />
          <div className="card-product-details flex-col flex-justify-start flex-align-start gap-0-5 w-full px-1 m-1">
            <div className="card-product-heads mb-0-5">
              <p className="text-md font-bold text-truncate-lines-2">{title}</p>
              <p className="h6 color-faded">{brand}</p>
            </div>
            <div className="card-ratings">
              <p className="rating text-sm-2 inline mr-1 px-0-75 py-0-5 rounded-md">
                {totalStars} <i className="fa-solid fa-star text-sm-2" />
              </p>
              <p className="text-sm-2 inline"> ({totalRatings} ratings)</p>
            </div>
            <div className="card-price-container my-0-25">
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
                  {originalMRP -
                    getDiscountedPrice(originalMRP, discountPercent)}
                </p>
              </div>
            </div>
            <button className="btn btn-primary w-90-pc py-0-5 rounded-md align-self-center">
              <span className="mx-0-5">
                <i className="fa-solid fa-cart-plus" />
              </span>
              Add to Cart
            </button>
          </div>
          <div
            className="btn-wishlist absolute w-1 h-1 p-1-5 rounded-circle
          flex-row flex-justify-center flex-align-center"
          >
            <button>
              <span>
                <i className="fa-regular fa-heart fa-lg" />
              </span>
            </button>
          </div>
          {newArrival && (
            <span className="card-badge text-badge-highlight m-0-25 px-0-75 py-0-25 rounded-md text-sm-2 w-fit absolute">
              New
            </span>
          )}
          {!inStock && (
            <div className="card-text-overlay-container absolute flex-row flex-justify-center flex-align-center w-full h-full rounded-inherit">
              <p className="h1">Sold Out</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
