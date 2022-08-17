import "./profile.css";
import { ModalPortal, AddressForm } from "../../components";
import { useAuth, useAddresses } from "../../contexts";
import { postNewAddress } from "../../utils";

import {
  addressFormDataReducerFunction,
  initialAddressFormDataState,
} from "../../reducers";
import { useReducer, useState } from "react";

const AddNewAddressButton = ({ iconButton = false }) => {
  const [newAddressFormDataState, newAddressFormDataDispatch] = useReducer(
    addressFormDataReducerFunction,
    initialAddressFormDataState
  );
  const { addressesDispatch } = useAddresses();
  const {
    authState: { authToken },
  } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const saveNewAddress = async () => {
    try {
      const {
        data: { addresses },
      } = await postNewAddress(newAddressFormDataState, authToken);
      addressesDispatch({
        type: "ADDRESSES_UPDATE",
        payload: { addresses: addresses, areAddressesLoading: false },
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
    setShowModal(false);
    newAddressFormDataDispatch({
      type: "CLEAR_ADDRESS_FORM",
    });
  };

  return (
    <div>
      {iconButton ? (
        <button
          className="btn color-primary p-1 rounded-md text-lg"
          onClick={() => setShowModal(true)}
        >
          <i className="fa-solid fa-circle-plus fa-2xl"></i>
        </button>
      ) : (
        <button
          className="btn btn-primary px-2 py-1 rounded-md"
          onClick={() => setShowModal(true)}
        >
          <span className="mr-1">
            <i className="fa-solid fa-circle-plus fa-xl"></i>
          </span>
          Add New Address
        </button>
      )}

      <ModalPortal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          newAddressFormDataDispatch({ type: "CLEAR_ADDRESS_FORM" });
        }}
      >
        <AddressForm
          addressFormDataState={newAddressFormDataState}
          addressFormDataDispatch={newAddressFormDataDispatch}
          formSubmitHandler={saveNewAddress}
          formHeading="Add New Address"
        />
      </ModalPortal>
    </div>
  );
};

export { AddNewAddressButton };
