import { addressesReducerFunction, initialAddressesState } from "../reducers";
import { fetchAddresses } from "../utils";
import { useAuth } from "../contexts";
import { createContext, useContext, useEffect, useReducer } from "react";

const AddressesContext = createContext(initialAddressesState);

const AddressesProvider = ({ children }) => {
  const [addressesState, addressesDispatch] = useReducer(
    addressesReducerFunction,
    initialAddressesState
  );

  const {
    authState: { isAuthenticated, authToken },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchAddresses(addressesDispatch, authToken);
    }
  }, [isAuthenticated]);

  return (
    <AddressesContext.Provider
      value={{ addressesState: { ...addressesState }, addressesDispatch }}
    >
      {children}
    </AddressesContext.Provider>
  );
};

const useAddresses = () => useContext(AddressesContext);

export { useAddresses, AddressesProvider };
