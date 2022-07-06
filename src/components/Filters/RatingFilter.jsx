import "./filters.css";
import { useFilter } from "../../contexts";
import { v4 as uuid } from "uuid";

const RatingFilter = () => {
  const {
    filterState: { ratingsAbove },
    filterDispatch,
  } = useFilter();

  const ratingFilterOptionsList = [
    { _id: uuid(), ratingLabel: "4", ratingValue: 4 },
    { _id: uuid(), ratingLabel: "3", ratingValue: 3 },
    { _id: uuid(), ratingLabel: "2", ratingValue: 2 },
    { _id: uuid(), ratingLabel: "1", ratingValue: 1 },
  ];

  const handleRatingChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_RATINGS",
      payload: parseInt(event.target.value),
    });
  };

  return (
    <div className="filter-rating my-5">
      <p className="filter-head text-lg font-bold mb-0-75">Ratings</p>
      <div className="filter-input-subsection px-1">
        <ul>
          {ratingFilterOptionsList.map(({ _id, ratingLabel, ratingValue }) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={_id}
            >
              <input
                type="radio"
                name="rating-filter-input"
                id={_id}
                value={ratingValue}
                checked={ratingsAbove === ratingValue}
                onChange={handleRatingChange}
              />
              <label htmlFor={_id}>
                {ratingLabel}
                <span className="mx-0-5">
                  <i className="fa-solid fa-star" />
                </span>{" "}
                &amp; above
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { RatingFilter };
