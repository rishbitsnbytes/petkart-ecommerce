import {
  checkoutDataReducerFunction,
  initialCheckoutDataState,
} from "../reducers";
import { createContext, useContext, useReducer } from "react";

const CheckoutContext = createContext(initialCheckoutDataState);

const CheckoutProvider = ({ children }) => {
  const [checkoutData, checkoutDataDispatch] = useReducer(
    checkoutDataReducerFunction,
    initialCheckoutDataState
  );

  return (
    <CheckoutContext.Provider
      value={{ checkoutData: { ...checkoutData }, checkoutDataDispatch }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckout = () => useContext(CheckoutContext);

export { useCheckout, CheckoutProvider };
