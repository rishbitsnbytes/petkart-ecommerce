import "./profile.css";
import { deleteAddress } from "../../utils";
import { useAuth, useAddresses } from "../../contexts";
import { useToast } from "../../custom-hooks";
import { useState } from "react";

const DeleteAddressButton = ({ address }) => {
  const { _id } = address;
  const [loadingState, setLoadingState] = useState(false);
  const { addressesDispatch } = useAddresses();
  const {
    authState: { authToken },
  } = useAuth();
  const { showToast } = useToast();

  const handleAddressDelete = async (event) => {
    event.preventDefault();
    setLoadingState(true);
    try {
      const {
        data: { addresses },
      } = await deleteAddress(_id, authToken);
      addressesDispatch({
        type: "ADDRESSES_UPDATE",
        payload: { addresses: addresses, areAddressesLoading: false },
      });
      showToast("Address deleted successfully", "success");
      setLoadingState(false);
    } catch (error) {
      addressesDispatch({
        type: "ADDRESSES_ERROR",
        payload: {
          areAddressesLoading: false,
          addressesError: `Addresses could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
        },
      });
      showToast("Address could not be deleted. Try again.", "error");
      setLoadingState(false);
    }
  };

  return (
    <button
      className={`btn btn-secondary px-3 py-0-5 rounded-md ${
        loadingState ? "btn-disabled cursor-progress" : ""
      }`}
      onClick={(event) => handleAddressDelete(event)}
      disabled={loadingState}
    >
      <span className="mr-1">
        <i className="fa-solid fa-trash-can"></i>
      </span>
      {loadingState ? "Deleting.." : "Delete"}
    </button>
  );
};

export { DeleteAddressButton };
