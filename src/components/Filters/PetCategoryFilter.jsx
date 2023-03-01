import "./filters.css";
import { useFilter } from "../../contexts";
import { useCategories } from "../../utils";

const PetCategoryFilter = () => {
  const [, petCategoriesFromBackend] = useCategories();

  const {
    filterState: { petCategories },
    filterDispatch,
  } = useFilter();

  const handlePetCategoryChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_PET_CATEGORY",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-pet-category my-5">
      <p className="filter-head text-lg font-bold mb-0-75">Shop By</p>
      <div className="filter-input-subsection px-1">
        <ul className="flex-row flex-justify-start flex-align-center gap-2 flex-wrap">
          {petCategoriesFromBackend.map(({ _id, categoryName }) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={_id}
            >
              <input
                type="checkbox"
                id={_id}
                name={categoryName}
                checked={petCategories[categoryName]}
                value={categoryName}
                onChange={handlePetCategoryChange}
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

export { PetCategoryFilter };
