import { getDiscountedPrice } from "../getDiscountedPrice";

const sortBy = (productsFromPrevFilter, sortByType) => {
  if (!sortByType) return productsFromPrevFilter;

  switch (sortByType) {
    case "PRICE_HIGH_TO_LOW": {
      return [...productsFromPrevFilter].sort((prevProduct, nextProduct) => {
        const prevProductDiscountedPrice = getDiscountedPrice(
          prevProduct.originalMRP,
          prevProduct.discountPercent
        );
        const nextProductDiscountedPrice = getDiscountedPrice(
          nextProduct.originalMRP,
          nextProduct.discountPercent
        );

        return nextProductDiscountedPrice - prevProductDiscountedPrice;
      });
    }

    case "PRICE_LOW_TO_HIGH": {
      return [...productsFromPrevFilter].sort((prevProduct, nextProduct) => {
        const prevProductDiscountedPrice = getDiscountedPrice(
          prevProduct.originalMRP,
          prevProduct.discountPercent
        );
        const nextProductDiscountedPrice = getDiscountedPrice(
          nextProduct.originalMRP,
          nextProduct.discountPercent
        );

        return prevProductDiscountedPrice - nextProductDiscountedPrice;
      });
    }
  }
};

export { sortBy };
