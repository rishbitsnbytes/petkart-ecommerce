import { ErrorMessage, LoadingAnimation, WishlistMain } from "../../components";
import { useDocumentTitle } from "../../custom-hooks";
import { useWishlist } from "../../contexts";
import { useEffect } from "react";

const WishlistPage = () => {
  const [setDocumentTitle] = useDocumentTitle();
  const {
    wishlistState: { isWishlistLoading, wishlistError },
  } = useWishlist();

  useEffect(() => {
    setDocumentTitle("Wishlist || Petkart");
  }, []);

  return (
    <div>
      {/* Main Wishlist Section */}
      {isWishlistLoading ? (
        <LoadingAnimation
          width="15"
          height="15"
          loadingMessage="Fetching the Wishlist..."
        />
      ) : wishlistError ? (
        <ErrorMessage errorMessage={wishlistError} />
      ) : (
        <WishlistMain />
      )}
    </div>
  );
};

export { WishlistPage };
