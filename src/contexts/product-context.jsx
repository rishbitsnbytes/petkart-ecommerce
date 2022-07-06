import { createContext, useContext, useEffect, useReducer } from "react";

import { productReducerFunction } from "../reducers";
import { fetchProducts } from "../utils";

const initialProductState = {
  products: [],
  areProductsLoading: true,
  productError: null,
};

const ProductContext = createContext(initialProductState);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducerFunction,
    initialProductState
  );

  useEffect(() => {
    fetchProducts(productDispatch);
  }, []);

  return (
    <ProductContext.Provider
      value={{ productState: { ...productState }, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
