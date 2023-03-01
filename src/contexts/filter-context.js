import { useContext, createContext, useReducer } from "react";

import { filterReducerFunction } from "../reducers";

const initialFilterState = {
  maxPriceValue: 3000,
  petCategories: {
    Dog: false,
    Cat: false,
  },
  productCategories: {
    Food: false,
    Toy: false,
    Grooming: false,
    Comfort: false,
    Accessory: false,
  },
  ratingsAbove: 0,
  foodCategories: {
    Veg: false,
    "Non-Veg": false,
  },
  brands: {
    "Isle Of Dogs": false,
    "Happi Doggy": false,
    Farmina: false,
    Sheba: false,
    "Royal Canin": false,
    Pedigree: false,
    Kong: false,
    Savic: false,
    Trixie: false,
    "Heads Up For Tails": false,
  },
  sortByType: "",
  searchByText: "",
};

const FilterContext = createContext(initialFilterState);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducerFunction,
    initialFilterState
  );

  return (
    <FilterContext.Provider
      value={{ filterState: { ...filterState }, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider, initialFilterState };
