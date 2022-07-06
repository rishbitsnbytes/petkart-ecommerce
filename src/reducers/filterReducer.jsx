import { initialFilterState } from "../contexts";

const filterActionTypes = {
  FILTER_BY_PRICE: "FILTER_BY_PRICE",
  FILTER_BY_PET_CATEGORY: "FILTER_BY_PET_CATEGORY",
  FILTER_BY_PRODUCT_CATEGORY: "FILTER_BY_PRODUCT_CATEGORY",
  FILTER_BY_RATINGS: "FILTER_BY_RATINGS",
  FILTER_BY_FOOD_CATEGORY: "FILTER_BY_FOOD_CATEGORY",
  FILTER_BY_BRAND: "FILTER_BY_BRAND",
  FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
  SORT_BY: "SORT_BY",
  CLEAR_ALL_FILTERS: "CLEAR_ALL_FILTERS",
};

const filterReducerFunction = (prevFilterState, { type, payload }) => {
  switch (type) {
    case filterActionTypes.FILTER_BY_PRICE: {
      return {
        ...prevFilterState,
        maxPriceValue: payload,
      };
    }

    case filterActionTypes.FILTER_BY_PET_CATEGORY: {
      return {
        ...prevFilterState,
        petCategories: {
          ...prevFilterState.petCategories,
          [payload]: !prevFilterState.petCategories[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_PRODUCT_CATEGORY: {
      return {
        ...prevFilterState,
        productCategories: {
          ...prevFilterState.productCategories,
          [payload]: !prevFilterState.productCategories[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_RATINGS: {
      return {
        ...prevFilterState,
        ratingsAbove: payload,
      };
    }

    case filterActionTypes.FILTER_BY_FOOD_CATEGORY: {
      return {
        ...prevFilterState,
        foodCategories: {
          ...prevFilterState.foodCategories,
          [payload]: !prevFilterState.foodCategories[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_BRAND: {
      return {
        ...prevFilterState,
        brands: {
          ...prevFilterState.brands,
          [payload]: !prevFilterState.brands[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_SEARCH: {
      return {
        ...prevFilterState,
        searchByText: payload,
      };
    }

    case filterActionTypes.SORT_BY: {
      return {
        ...prevFilterState,
        sortByType: payload,
      };
    }

    case filterActionTypes.CLEAR_ALL_FILTERS: {
      return {
        ...initialFilterState,
      };
    }
  }
};

export { filterReducerFunction };
