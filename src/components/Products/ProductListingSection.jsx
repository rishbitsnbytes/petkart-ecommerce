import { SortByBar } from "../../components";
import { ProductCard, LoadingAnimation, ErrorMessage } from "../../components/";
import { ComposeProducts } from "../../utils";
import { useProducts } from "../../contexts";

const ProductListingSection = () => {
  const {
    productState: { products, areProductsLoading, productError },
  } = useProducts();

  const productsFilteredSorted = ComposeProducts(products);

  return (
    <div>
      {/* Product Display Section */}
      <section className="flex-col flex-justify-start flex-align-start">
        {/* Product List Head Section - Number of Products, Sort Filters */}
        <section className="w-full">
          <h2 className="main-section-head w-full mb-0-5 pb-0-5 font-xbold">
            PRODUCTS
          </h2>
          <div>
            <p className="h3 mb-0-5 pb-0-5">
              Number of Products showing below -{" "}
              <span className="color-tertiary font-bold h2">
                {productsFilteredSorted.length}
              </span>
            </p>
          </div>
          {/* Sort By Bar Component */}
          <SortByBar />
        </section>
        {/* Product Cards Grid Section */}
        <section className="product-list-wrapper grid grid-col-autofit-w-25 w-full gap-5 pt-1 mt-1">
          {/* Product Cards  */}
          {areProductsLoading ? (
            <LoadingAnimation
              width="15"
              height="15"
              loadingMessage="Products are being fetched..."
            />
          ) : productError ? (
            <div className="m-auto my-3 w-50-pc h-full flex-col flex-justify-center flex-align-center">
              <ErrorMessage errorMessage={productError} />
            </div>
          ) : (
            productsFilteredSorted.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </section>
      </section>
    </div>
  );
};

export { ProductListingSection };
