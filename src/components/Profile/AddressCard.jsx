import "./profile.css";
import { EditAddressButton, DeleteAddressButton } from "../../components";

const AddressCard = ({ address, iconCard = false }) => {
  const { _id, fullName, addressLine, city, state, pincode, phoneNumber } =
    address;

  return (
    <div className="w-full">
      {iconCard ? (
        <div className="address-card px-3 py-2 rounded-md flex-row flex-justify-between flex-align-start w-full gap-2">
          <div className="address-details">
            <p className="h4 font-bold color-tertiary">{fullName}</p>
            <p className="h4 font-bold">{addressLine}</p>
            <p className="h4 font-bold">{`${city}, ${state}, ${pincode}`}</p>
            <p className="h4 font-bold">{phoneNumber}</p>
          </div>
          <div>
            <EditAddressButton address={address} iconButton />
          </div>
        </div>
      ) : (
        <div className="address-card px-3 py-2 rounded-md flex-col flex-justify-center flex-align-start w-full gap-3">
          <div className="address-details">
            <p className="h4 font-bold color-tertiary">{fullName}</p>
            <p className="h4 font-bold">{addressLine}</p>
            <p className="h4 font-bold">{`${city}, ${state}, ${pincode}`}</p>
            <p className="h4 font-bold">{phoneNumber}</p>
          </div>
          <div className="flex-row flex-align-center flex-justify-start w-full gap-3 flex-wrap">
            <div>
              <EditAddressButton address={address} />
            </div>
            <div>
              <DeleteAddressButton address={address} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { AddressCard };
