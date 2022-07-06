const searchBy = (productsFromPrevFilter, searchByText) => {
  if (searchByText.trim().length === 0) return productsFromPrevFilter;
  return productsFromPrevFilter.filter(
    ({ title, subtitle, productCategory, petCategory, brand }) =>
      title.toLowerCase().includes(searchByText.toLowerCase()) ||
      subtitle.toLowerCase().includes(searchByText.toLowerCase()) ||
      productCategory.toLowerCase().includes(searchByText.toLowerCase()) ||
      petCategory.toLowerCase().includes(searchByText.toLowerCase()) ||
      brand.toLowerCase().includes(searchByText.toLowerCase())
  );
};

export { searchBy };
