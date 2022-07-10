import { WishlistMain } from "../../components";
import { useDocumentTitle } from "../../custom-hooks";
import { useEffect } from "react";

const WishlistPage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Wishlist || Petkart");
  }, []);

  return (
    <div>
      {/* Main Wishlist Section */}
      <WishlistMain />
    </div>
  );
};

export { WishlistPage };
