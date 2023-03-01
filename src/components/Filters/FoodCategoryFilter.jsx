import "./filters.css";
import { useFilter } from "../../contexts";
import { v4 as uuid } from "uuid";

const FoodCategoryFilter = () => {
  const {
    filterState: { foodCategories },
    filterDispatch,
  } = useFilter();

  const foodCategoriesData = [
    { _id: uuid(), categoryName: "Veg" },
    { _id: uuid(), categoryName: "Non-Veg" },
  ];

  const handleFoodCategoryChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_FOOD_CATEGORY",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-pet-food-category my-5">
      <p className="filter-head text-lg font-bold mb-0-75">Food Category</p>
      <div className="filter-input-subsection px-1">
        <ul className="flex-row flex-justify-start flex-align-center gap-2">
          {foodCategoriesData.map(({ _id, categoryName, value }) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={_id}
            >
              <input
                type="checkbox"
                id={_id}
                name={categoryName}
                value={categoryName}
                checked={foodCategories[categoryName]}
                onChange={handleFoodCategoryChange}
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

export { FoodCategoryFilter };
