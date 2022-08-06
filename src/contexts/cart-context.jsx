import { cartReducerFunction, initialCartState } from "../reducers";
import { useAuth } from "../contexts";
import { fetchCart } from "../utils";
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
  const {
    authState: { isAuthenticated, authToken },
  } = useAuth();

  const [cartState, cartDispatch] = useReducer(
    cartReducerFunction,
    initialCartState
  );

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart(cartDispatch, authToken);
    }
  }, [isAuthenticated]);

  return (
    <CartContext.Provider value={{ cartState: { ...cartState }, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
