import "./products.css";
import { getDiscountedPrice, getFullImgUrl } from "../../utils";
import {
  PawBgPrints,
  LoadingAnimation,
  ErrorMessage,
  WishlistButton,
} from "../../components";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    productState: { products, areProductsLoading, productError },
  } = useProducts();

  const getProductDetails = (products, productId) => {
    return products?.find(
      ({ staticId }) => Number(staticId) === Number(productId)
    );
  };

  const product = getProductDetails(products, productId);

  if (areProductsLoading) {
    return (
      <main className="product-page-main w-full flex-col flex-justify-start flex-align-center relative">
        <section className="w-50-pc h-50">
          <LoadingAnimation
            width="15"
            height="15"
            loadingMessage="Product Details are being fetched..."
          />
        </section>
      </main>
    );
  }
  if (productError) {
    return (
      <main className="product-page-main w-full flex-col flex-justify-start flex-align-center relative">
        <section className="w-50-pc h-50">
          <ErrorMessage errorMessage={productError} />
        </section>
      </main>
    );
  }

  const {
    _id,
    staticId,
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
    <main className="product-page-main w-full flex-col flex-justify-center flex-align-center relative">
      <section className="product-page-card-wrapper grid-50-50-layout m-1 grid grid-cols-2 grid-rows-1 w-70-pc h-full rounded-md">
        <div className="w-full h-50">
          <img
            src={getFullImgUrl(imgUrl, title, "png")}
            alt={title}
            className="w-full h-full rounded-md"
          />
        </div>
        <section>
          <div className="product-details flex-col flex-justify-between flex-align-start gap-1 w-full h-fit p-1 m-1">
            <div className="product-heads mb-0-5">
              <p className="h2 font-bold">{title}</p>
              <p className="h4 font-bold  color-faded">{subtitle}</p>
              <p className="h4 color-tertiary">{brand}</p>
            </div>
            <div className="ratings">
              <p className="rating text-md inline mr-1 px-0-75 py-0-5 rounded-md">
                {totalStars} <i className="fa-solid fa-star text-md" />
              </p>
              <p className="text-md inline"> ({totalRatings} reviews)</p>
            </div>
            <div className="price-container my-1">
              <div>
                <p className="h1 color-primary font-bold inline mr-1">
                  ₹{getDiscountedPrice(originalMRP, discountPercent)}
                </p>
                <p className="text-lg color-faded inline">
                  <s>₹{originalMRP}</s>
                </p>
              </div>
              <div>
                <p className="text-lg inline color-tertiary mr-1">
                  {discountPercent}% off
                </p>
                <p className="text-lg inline color-tertiary">
                  You save : ₹
                  {originalMRP -
                    getDiscountedPrice(originalMRP, discountPercent)}{" "}
                </p>
              </div>
            </div>
            <div className="my-1">
              <ul>
                <li className="text-sm-2 flex-row flex-justify-start flex-align-center gap-1">
                  <span className="color-secondary w-1-5">
                    <i className="fa-solid fa-truck" />
                  </span>
                  Fast delivery available
                </li>
                <li className="text-sm-2 flex-row flex-justify-start flex-align-center gap-1">
                  <span className="color-secondary w-1-5">
                    <i className="fa-solid fa-square-check" />
                  </span>
                  Price displayed is inclusive of GST
                </li>
                <li className="text-sm-2 flex-row flex-justify-start flex-align-center gap-1">
                  <span className="color-secondary w-1-5">
                    <i className="fa-solid fa-clipboard-check" />
                  </span>
                  Currently available in stock
                </li>
              </ul>
            </div>
            <div className="flex-row flex-justify-start flex-align-center gap-2 w-full my-1">
              <button className="btn btn-primary w-40-pc py-0-75 px-2 rounded-md align-self-center">
                <span className="mx-0-5">
                  <i className="fa-solid fa-cart-plus" />
                </span>
                Add to Cart
              </button>
              <div className="w-50-pc">
                <WishlistButton product={product} />
              </div>
            </div>
          </div>
        </section>
      </section>
      <PawBgPrints />
    </main>
  );
};

export { ProductDetails };
