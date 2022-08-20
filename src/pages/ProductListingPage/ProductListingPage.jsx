import "./ProductListingPage.css";
import { useDocumentTitle } from "../../custom-hooks";
import { FiltersWrapperSidebar, ProductListingSection } from "../../components";
import { useEffect } from "react";

const ProductListingPage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Products || Petkart");
  }, []);

  return (
    <div>
      {/* Main Product Listing Section */}
      <main className="section-main grid m-2 px-3 py-3 gap-5">
        <FiltersWrapperSidebar />
        <ProductListingSection />
      </main>
    </div>
  );
};

export { ProductListingPage };
