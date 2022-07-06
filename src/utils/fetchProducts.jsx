import axios from "axios";

const fetchProducts = async (productDispatch) => {
  try {
    const {
      data: { products: receivedProducts },
    } = await axios.get("/api/products");
    productDispatch({
      type: "PRODUCTS_SUCCESS",
      payload: {
        products: receivedProducts,
        areProductsLoading: false,
        productError: null,
      },
    });
  } catch (error) {
    productDispatch({
      type: "PRODUCTS_FAILURE",
      payload: {
        areProductsLoading: false,
        productError: `Products could not be fetched due to some server error. Please try again.
        Error Message : ${error.message}`,
      },
    });
  }
};

export { fetchProducts };
