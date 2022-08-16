import "./wishlist.css";
import { ProductCard, LoadingAnimation } from "../../components";
import { useWishlist } from "../../contexts";
import { Link } from "react-router-dom";

const WishlistMain = () => {
  const {
    wishlistState: { wishlistItems },
  } = useWishlist();

  return (
    <div>
      {/* Main Wishlist Section */}
      <main className="wishlist-main flex-col flex-justify-start flex-align-center w-full gap-5 my-5 px-8">
        <h1>
          {wishlistItems?.length > 0
            ? "Your Wishlist has "
            : "Your Wishlist is "}
          <span className="color-tertiary font-bold">
            {wishlistItems?.length > 0
              ? wishlistItems?.length === 1
                ? `  ${wishlistItems?.length} item!`
                : ` ${wishlistItems?.length} items!`
              : " Empty! It's Sad!"}
          </span>
        </h1>
        <section className="product-list-wrapper grid grid-col-autofit-w-25 w-full gap-5 pt-1 px-5">
          {wishlistItems?.map((product) => (
            <ProductCard key={product._id} product={product} wishlistCard />
          ))}
        </section>
        <Link
          to="/products"
          className="btn btn-primary w-fit py-1 px-5 rounded-md"
        >
          Let's Wish!
        </Link>
      </main>
    </div>
  );
};

export { WishlistMain };
