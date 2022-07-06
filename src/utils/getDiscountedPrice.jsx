const getDiscountedPrice = (originalMRP, discountPercent) => {
  return Math.round(originalMRP - (originalMRP * discountPercent) / 100);
};

export { getDiscountedPrice };
