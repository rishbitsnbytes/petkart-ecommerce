import { initialOrdersState, ordersReducerFunction } from "../reducers";
import { fetchOrders } from "../utils";
import { useAuth } from "../contexts";
import { createContext, useContext, useEffect, useReducer } from "react";

const OrdersContext = createContext(initialOrdersState);

const OrdersProvider = ({ children }) => {
  const [ordersState, ordersDispatch] = useReducer(
    ordersReducerFunction,
    initialOrdersState
  );

  const {
    authState: { isAuthenticated, authToken },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders(ordersDispatch, authToken);
    }
  }, [isAuthenticated]);

  return (
    <OrdersContext.Provider
      value={{ ordersState: { ...ordersState }, ordersDispatch }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

const useOrders = () => useContext(OrdersContext);

export { useOrders, OrdersProvider };
