import { useFilter } from "../../contexts";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const {
    filterState: { searchByText },
    filterDispatch,
  } = useFilter();

  const navigate = useNavigate();

  const handleSearchTextChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_SEARCH",
      payload: event.target.value,
    });
  };

  const navigateToProducts = (event) => {
    event.preventDefault();
    navigate("/products");
  };

  return (
    <div className="flex-row flex-justify-between flex-align-center flex-gap-1 w-30-pc">
      <form
        className="search-bar flex-row flex-justify-between flex-align-center flex-gap-1 px-1 py-0-5 rounded-md w-full"
        onSubmit={navigateToProducts}
      >
        <button className="btn btn-icon">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <input
          className="search-bar-input text-sm"
          type="search"
          placeholder="Type to search"
          value={searchByText}
          onChange={handleSearchTextChange}
        />
      </form>
    </div>
  );
};

export { SearchBar };
