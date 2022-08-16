const initialAddressesState = {
  addresses: [],
  areAddressesLoading: true,
  addressesError: null,
};

const addressesActionTypes = {
  ADDRESSES_UPDATE: "ADDRESSES_UPDATE",
  ADDRESSES_ERROR: "ADDRESSES_ERROR",
};

const addressesReducerFunction = (
  prevAddressesState,
  { type, payload: { addresses, areAddressesLoading, addressesError } }
) => {
  switch (type) {
    case addressesActionTypes.ADDRESSES_UPDATE:
      return {
        ...prevAddressesState,
        addresses: addresses,
        areAddressesLoading: areAddressesLoading,
        addressesError: addressesError,
      };

    case addressesActionTypes.ADDRESSES_ERROR:
      return {
        ...prevAddressesState,
        areAddressesLoading: areAddressesLoading,
        addressesError: addressesError,
      };

    default:
      return { ...initialAddressesState };
  }
};

export { addressesReducerFunction, initialAddressesState };
