import "./filters.css";
import { useFilter } from "../../contexts";
import { useBrands } from "../../utils";

const BrandFilter = () => {
  const {
    filterState: { brands },
    filterDispatch,
  } = useFilter();

  const [brandsDataFromBackend] = useBrands();

  const handleBrandChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_BRAND",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-brand my-5">
      <p className="filter-head text-lg font-bold mb-0-75">Brand</p>
      <div className="filter-input-subsection px-1">
        <ul>
          {brandsDataFromBackend.map(({ _id, brandName }) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={_id}
            >
              <input
                type="checkbox"
                id={_id}
                name={brandName}
                value={brandName}
                checked={brands[brandName]}
                onChange={handleBrandChange}
              />
              <label className="mx-0-5" htmlFor={_id}>
                {brandName}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { BrandFilter };
