import "./filters.css";
import { useFilter } from "../../contexts";

const PriceFilter = () => {
  const {
    filterState: { maxPriceValue },
    filterDispatch,
  } = useFilter();

  const handlePriceChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_PRICE",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-price my-5">
      <p className="filter-head text-lg font-bold mb-0-75">
        Max Price -
        <span className="mx-1">
          <i className="fa-solid fa-indian-rupee-sign mx-0-5" />
          {maxPriceValue}
        </span>
      </p>
      <div className="filter-input-subsection px-0-75">
        <div className="flex-row flex-justify-between flex-align-center">
          <p className="font-thin text-sm-2">
            <span>
              <i className="fa-solid fa-indian-rupee-sign" />
            </span>
            100
          </p>
          <p className="font-thin text-sm-2">
            <span>
              <i className="fa-solid fa-indian-rupee-sign" />
            </span>
            20000
          </p>
        </div>
        <input
          type="range"
          id="price-range"
          name="price-range"
          min={100}
          max={20000}
          onChange={handlePriceChange}
          value={maxPriceValue}
        />
      </div>
    </div>
  );
};

export { PriceFilter };
