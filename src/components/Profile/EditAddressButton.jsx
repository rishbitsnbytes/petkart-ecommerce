import "./profile.css";
import { ModalPortal, AddressForm } from "../../components";
import { useAuth, useAddresses } from "../../contexts";
import {
  addressFormDataReducerFunction,
  initialAddressFormDataState,
} from "../../reducers";
import { editAddress } from "../../utils";
import { useToast } from "../../custom-hooks";
import { useReducer, useState } from "react";

/* This component accepts 2 props :-  
--> iconButton - [Optional, Boolean] default is false, set it true if want only icon button.
-->  address - [Mandatory] - for address specific details */

const EditAddressButton = ({ address = {}, iconButton = false }) => {
  const { _id } = address;
  const [editAddressFormDataState, editAddressFormDataDispatch] = useReducer(
    addressFormDataReducerFunction,
    initialAddressFormDataState
  );
  const { addressesDispatch } = useAddresses();
  const {
    authState: { authToken },
  } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToast();

  const handleAddressEdit = () => {
    setShowModal(true);
    editAddressFormDataDispatch({
      type: "FILL_EDIT_ADDRESS_DATA",
      payload: address,
    });
  };

  const addressToBeEdited = {
    _id,
    ...editAddressFormDataState,
  };

  const saveEditedAddress = async () => {
    try {
      const {
        data: { addresses },
      } = await editAddress(addressToBeEdited, authToken);
      addressesDispatch({
        type: "ADDRESSES_UPDATE",
        payload: { addresses: addresses, areAddressesLoading: false },
      });
      showToast("Address updated successfully!", "success");
    } catch (error) {
      addressesDispatch({
        type: "ADDRESSES_ERROR",
        payload: {
          areAddressesLoading: false,
          addressesError: `Addresses could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
        },
      });
      showToast("Address could not be updated. Try again!", "error");
    }
    setShowModal(false);
    editAddressFormDataDispatch({
      type: "CLEAR_ADDRESS_FORM",
    });
  };

  return (
    <div>
      {iconButton ? (
        <div>
          <button
            className="btn btn-secondary px-1 py-0-5 rounded-md"
            onClick={handleAddressEdit}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <ModalPortal isOpen={showModal} onClose={() => setShowModal(false)}>
            <AddressForm
              addressFormDataState={editAddressFormDataState}
              addressFormDataDispatch={editAddressFormDataDispatch}
              formSubmitHandler={saveEditedAddress}
              formHeading="Edit Address"
            />
          </ModalPortal>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-primary px-3 py-0-5 rounded-md"
            onClick={handleAddressEdit}
          >
            <span className="mr-1">
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            Edit
          </button>
          <ModalPortal isOpen={showModal} onClose={() => setShowModal(false)}>
            <AddressForm
              addressFormDataState={editAddressFormDataState}
              addressFormDataDispatch={editAddressFormDataDispatch}
              formSubmitHandler={saveEditedAddress}
              formHeading="Edit Address"
            />
          </ModalPortal>
        </div>
      )}
    </div>
  );
};

export { EditAddressButton };
