import axios from "axios";
import { getAllAddresses } from "../../utils";

const fetchAddresses = async (addressesDispatch, authToken) => {
  try {
    const {
      data: { addresses },
    } = await getAllAddresses(authToken);
    addressesDispatch({
      type: "ADDRESSES_UPDATE",
      payload: {
        addresses: addresses,
        areAddressesLoading: false,
        addressesError: null,
      },
    });
  } catch (error) {
    addressesDispatch({
      type: "ADDRESSES_ERROR",
      payload: {
        areAddressesLoading: false,
        addressesError: `Addresses could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
      },
    });
  }
};

export { fetchAddresses };
