import {
  filterByPrice,
  filterByPetCategory,
  filterByProductCategory,
  filterByRatings,
  filterByFoodCategory,
  filterByBrand,
  sortBy,
  searchBy,
} from "../../utils";
import { useFilter } from "../../contexts";

const ComposeProducts = (productsInitialState) => {
  const {
    filterState: {
      maxPriceValue,
      petCategories,
      productCategories,
      ratingsAbove,
      foodCategories,
      brands,
      sortByType,
      searchByText,
    },
  } = useFilter();

  const productsFilteredBySearch = searchBy(productsInitialState, searchByText);

  const productsFilteredByProductCategory = filterByProductCategory(
    productsFilteredBySearch,
    productCategories
  );

  const productsFilteredByPrice = filterByPrice(
    productsFilteredByProductCategory,
    maxPriceValue
  );

  const productsFilteredByRatings = filterByRatings(
    productsFilteredByPrice,
    ratingsAbove
  );

  const productsFilteredByBrand = filterByBrand(
    productsFilteredByRatings,
    brands
  );

  const productsFilteredByPetCategory = filterByPetCategory(
    productsFilteredByBrand,
    petCategories
  );

  const productsFilteredByFoodCategory = filterByFoodCategory(
    productsFilteredByPetCategory,
    foodCategories
  );

  const productsFilteredSorted = sortBy(
    productsFilteredByFoodCategory,
    sortByType
  );

  return productsFilteredSorted;
};

export { ComposeProducts };
