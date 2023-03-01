const initialAddressFormDataState = {
  fullName: "",
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
  phoneNumber: "",
};

const addressFormDataActionTypes = {
  FULL_NAME_UPDATE: "FULL_NAME_UPDATE",
  ADDRESS_LINE_UPDATE: "ADDRESS_LINE_UPDATE",
  CITY_UPDATE: "CITY_UPDATE",
  STATE_UPDATE: "STATE_UPDATE",
  PINCODE_UPDATE: "PINCODE_UPDATE",
  PHONE_NUMBER_UPDATE: "PHONE_NUMBER_UPDATE",
  FILL_DUMMY_ADDRESS: "FILL_DUMMY_ADDRESS",
  FILL_EDIT_ADDRESS_DATA: "FILL_EDIT_ADDRESS_DATA",
  CLEAR_ADDRESS_FORM: "CLEAR_ADDRESS_FORM",
};

const addressFormDataReducerFunction = (
  prevAddressFormDataState,
  { type, payload }
) => {
  switch (type) {
    case addressFormDataActionTypes.FULL_NAME_UPDATE: {
      return {
        ...prevAddressFormDataState,
        fullName: payload,
      };
    }

    case addressFormDataActionTypes.ADDRESS_LINE_UPDATE: {
      return {
        ...prevAddressFormDataState,
        addressLine: payload,
      };
    }

    case addressFormDataActionTypes.CITY_UPDATE: {
      return {
        ...prevAddressFormDataState,
        city: payload,
      };
    }

    case addressFormDataActionTypes.STATE_UPDATE: {
      return {
        ...prevAddressFormDataState,
        state: payload,
      };
    }

    case addressFormDataActionTypes.PINCODE_UPDATE: {
      return {
        ...prevAddressFormDataState,
        pincode: payload,
      };
    }

    case addressFormDataActionTypes.PHONE_NUMBER_UPDATE: {
      return {
        ...prevAddressFormDataState,
        phoneNumber: payload,
      };
    }

    case addressFormDataActionTypes.FILL_DUMMY_ADDRESS: {
      return {
        ...prevAddressFormDataState,
        fullName: "Dummy Khan",
        addressLine: "3142, Esi Hospital Road, Indiranagar",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560038",
        phoneNumber: "08025253111",
      };
    }

    case addressFormDataActionTypes.FILL_EDIT_ADDRESS_DATA: {
      return {
        ...prevAddressFormDataState,
        fullName: payload.fullName,
        addressLine: payload.addressLine,
        city: payload.city,
        state: payload.state,
        pincode: payload.pincode,
        phoneNumber: payload.phoneNumber,
      };
    }

    case addressFormDataActionTypes.CLEAR_ADDRESS_FORM: {
      return { ...initialAddressFormDataState };
    }

    default:
      return { ...initialAddressFormDataState };
  }
};

export { addressFormDataReducerFunction, initialAddressFormDataState };
