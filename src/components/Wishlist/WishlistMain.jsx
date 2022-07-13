import "./wishlist.css";
import { ProductCard } from "../../components";
import { useProducts } from "../../contexts";
import { Link } from "react-router-dom";

const WishlistMain = () => {
  const {
    productState: { products },
  } = useProducts();

  return (
    <div>
      {/* Main Wishlist Section */}
      <main className="wishlist-main flex-col flex-justify-center flex-align-center w-full gap-5 my-5 px-8">
        <h1>
          My Wishlist -{" "}
          <span className="color-tertiary font-bold">
            {" "}
            {products.length} items{" "}
          </span>
        </h1>
        <section className="product-list-wrapper grid grid-col-autofit-w-25 w-full gap-5 pt-1 px-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} wishlistCard />
          ))}
        </section>
        <Link
          to="/products"
          className="btn btn-primary w-fit py-1 px-5 rounded-md"
        >
          Shop More
        </Link>
      </main>
    </div>
  );
};

export { WishlistMain };
