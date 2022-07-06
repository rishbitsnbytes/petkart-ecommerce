import "./filters.css";
import { useFilter } from "../../contexts";
import { useCategories } from "../../utils";

const ProductCategoryFilter = () => {
  const [productCategoriesFromBackend] = useCategories();
  const {
    filterState: { productCategories },
    filterDispatch,
  } = useFilter();

  const handleProductCategoryChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_PRODUCT_CATEGORY",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-product-type my-5">
      <p className="filter-head text-lg font-bold mb-0-75">Product Type</p>
      <div className="filter-input-subsection px-1">
        <ul>
          {productCategoriesFromBackend.map(({ _id, categoryName }) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={_id}
            >
              <input
                type="checkbox"
                id={_id}
                name={categoryName}
                checked={productCategories[categoryName]}
                value={categoryName}
                onChange={handleProductCategoryChange}
              />
              <label className="mx-0-5" htmlFor={_id}>
                {categoryName}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { ProductCategoryFilter };
