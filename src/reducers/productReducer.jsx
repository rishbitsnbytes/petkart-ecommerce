const productActionTypes = {
  PRODUCTS_SUCCESS: "PRODUCTS_SUCCESS",
  PRODUCTS_FAILURE: "PRODUCTS_FAILURE",
};

const productReducerFunction = (
  prevProductState,
  { type, payload: { products, areProductsLoading, productError } }
) => {
  switch (type) {
    case productActionTypes.PRODUCTS_SUCCESS: {
      return {
        ...prevProductState,
        products,
        areProductsLoading,
        productError,
      };
    }
    case productActionTypes.PRODUCTS_FAILURE: {
      return {
        ...prevProductState,
        areProductsLoading,
        productError,
      };
    }
  }
};

export { productReducerFunction };
