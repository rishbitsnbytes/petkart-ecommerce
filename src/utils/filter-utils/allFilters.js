import { getDiscountedPrice } from "../getDiscountedPrice";

const filterByPrice = (productsFromPrevFilter, maxPriceValue) =>
  productsFromPrevFilter.filter(
    ({ originalMRP, discountPercent }) =>
      getDiscountedPrice(originalMRP, discountPercent) <= maxPriceValue
  );

const filterByPetCategory = (productsFromPrevFilter, petCategories) =>
  Object.keys(petCategories).filter((petCategory) => petCategories[petCategory])
    .length !== 0
    ? Object.keys(petCategories).reduce(
        (prev, curr) =>
          petCategories[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(
                  ({ petCategory }) => petCategory === curr
                ),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

const filterByProductCategory = (productsFromPrevFilter, productCategories) =>
  Object.keys(productCategories).filter(
    (productCategory) => productCategories[productCategory]
  ).length !== 0
    ? Object.keys(productCategories).reduce(
        (prev, curr) =>
          productCategories[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(
                  ({ productCategory }) => productCategory === curr
                ),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

const filterByRatings = (productsFromPrevFilter, ratingsAbove) =>
  productsFromPrevFilter.filter(({ totalStars }) => totalStars >= ratingsAbove);

const filterByFoodCategory = (productsFromPrevFilter, foodCategories) =>
  Object.keys(foodCategories).filter(
    (foodCategory) => foodCategories[foodCategory]
  ).length !== 0
    ? Object.keys(foodCategories).reduce(
        (prev, curr) =>
          foodCategories[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(
                  ({ foodCategory }) => foodCategory === curr
                ),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

const filterByBrand = (productsFromPrevFilter, brands) =>
  Object.keys(brands).filter((brand) => brands[brand]).length !== 0
    ? Object.keys(brands).reduce(
        (prev, curr) =>
          brands[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(({ brand }) => brand === curr),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

export {
  filterByPrice,
  filterByPetCategory,
  filterByProductCategory,
  filterByRatings,
  filterByFoodCategory,
  filterByBrand,
};
