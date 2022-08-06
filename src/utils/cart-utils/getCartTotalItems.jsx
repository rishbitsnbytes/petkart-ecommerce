const getCartTotalItems = (cartItems) => {
  let totalItems = 0;
  cartItems.map(({ qty }) => {
    totalItems += qty;
  });
  return totalItems;
};

export { getCartTotalItems };
