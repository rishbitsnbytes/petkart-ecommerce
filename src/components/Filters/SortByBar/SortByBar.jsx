import "./sort-by-bar.css";
import { useFilter } from "../../../contexts";

const SortByBar = () => {
  const {
    filterState: { sortByType },
    filterDispatch,
  } = useFilter();

  const sortByButtonsData = [
    { btnName: "Price -- Low to High", value: "PRICE_LOW_TO_HIGH" },
    { btnName: "Price -- High to Low", value: "PRICE_HIGH_TO_LOW" },
  ];

  const handleSortByClick = (event) => {
    filterDispatch({
      type: "SORT_BY",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-sort-wrapper flex-row flex-justify-start flex-align-center gap-2 w-full mt-0-5">
      <p className="h4 font-bold mr-1">Sort By - </p>
      {sortByButtonsData.map(({ btnName, value }) => (
        <button
          className={`btn btn-link-naked ${
            sortByType === value && "btn-sort-active"
          }`}
          value={value}
          key={btnName}
          onClick={handleSortByClick}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export { SortByBar };
