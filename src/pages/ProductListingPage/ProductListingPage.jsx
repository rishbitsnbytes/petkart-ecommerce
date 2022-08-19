import "./ProductListingPage.css";
import { useDocumentTitle } from "../../custom-hooks";
import { useFilter } from "../../contexts";
import { FiltersWrapperSidebar, ProductListingSection } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProductListingPage = () => {
  const [setDocumentTitle] = useDocumentTitle();
  const { filterDispatch } = useFilter();
  const location = useLocation();
  console.log("log", location.state);

  useEffect(() => {
    setDocumentTitle("Products || Petkart");
  }, []);

  useEffect(() => {
    if (location.state) {
      const { filterType, filterCategory } = location?.state;
      filterDispatch({
        type: "CLEAR_ALL_FILTERS",
      });
      filterDispatch({
        type: filterType,
        payload: filterCategory,
      });
    }
  }, [location?.state]);

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
