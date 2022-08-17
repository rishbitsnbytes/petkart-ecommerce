import "./profile.css";
import { useState } from "react";

const AddressForm = ({
  addressFormDataState,
  addressFormDataDispatch,
  formSubmitHandler,
  formHeading = "Address Form",
}) => {
  const [loadingState, setLoadingState] = useState(false);

  const { fullName, addressLine, city, state, pincode, phoneNumber } =
    addressFormDataState;

  const handleAddressFormDataChange = (event, actionType) => {
    addressFormDataDispatch({
      type: actionType,
      payload: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoadingState(true);
    await formSubmitHandler();
    setLoadingState(false);
  };

  return (
    <div className="address-form-wrapper auth-form flex-col flex-justify-start flex-align-center px-2 gap-1 w-full">
      <h3 className="color-tertiary">{formHeading}</h3>
      <form className="address-form-wrapper auth-form flex-col flex-justify-start flex-align-center py-1 px-2 gap-2 w-full">
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(event) =>
              handleAddressFormDataChange(event, "FULL_NAME_UPDATE")
            }
            required
          />
        </div>
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="address">House No., Colony, Area</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your House No., Street, Colony, Area"
            value={addressLine}
            onChange={(event) =>
              handleAddressFormDataChange(event, "ADDRESS_LINE_UPDATE")
            }
            required
          />
        </div>
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your City"
            value={city}
            onChange={(event) =>
              handleAddressFormDataChange(event, "CITY_UPDATE")
            }
            required
          />
        </div>
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your State"
            value={state}
            onChange={(event) =>
              handleAddressFormDataChange(event, "STATE_UPDATE")
            }
            required
          />
        </div>
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="Enter your Pincode"
            value={pincode}
            onChange={(event) =>
              handleAddressFormDataChange(event, "PINCODE_UPDATE")
            }
            required
          />
        </div>{" "}
        <div className="flex-col flex-justify-center flex-align-start gap-0-5 h5 font-bold w-full">
          <label htmlFor="mobilenumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your Mobile Number"
            value={phoneNumber}
            onChange={(event) =>
              handleAddressFormDataChange(event, "PHONE_NUMBER_UPDATE")
            }
            required
          />
        </div>
        <div className="flex-row flex-justify-center flex-align-center w-full gap-3 pt-2">
          <button
            type="button"
            className="btn btn-secondary rounded-md py-1 w-full font-bold"
            onClick={(event) =>
              handleAddressFormDataChange(event, "FILL_DUMMY_ADDRESS")
            }
          >
            Fill Dummy Address
          </button>
          <button
            type="submit"
            className={`btn btn-primary rounded-md py-1 w-full font-bold ${
              loadingState ? "btn-disabled cursor-progress" : ""
            }`}
            onClick={handleFormSubmit}
            disabled={loadingState}
          >
            {loadingState ? "Saving..." : "Save Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddressForm };
