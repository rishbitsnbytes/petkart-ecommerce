import "./profile.css";
import { useAddresses } from "../../contexts";
import {
  AddressCard,
  AddNewAddressButton,
  LoadingAnimation,
  ErrorMessage,
} from "../../components";

const Addresses = () => {
  const {
    addressesState: { addresses, areAddressesLoading, addressesError },
  } = useAddresses();

  return (
    <div className="w-full h-full">
      {areAddressesLoading ? (
        <LoadingAnimation
          width="15"
          height="15"
          loadingMessage="Fetching the Addresses..."
        />
      ) : addressesError ? (
        <ErrorMessage errorMessage={addressesError} />
      ) : (
        <div className="flex-col flex-align-center flex-justify-center w-full gap-5 px-5 py-1">
          <div className="profile-address-head w-full py-1 text-center">
            <h2 className="h1 color-tertiary">Your Addresses</h2>
          </div>
          <div className="align-self-end">
            <AddNewAddressButton />
          </div>
          {addresses.length === 0 ? (
            <div className="w-ful h-full">
              <p className="h1">
                No Addresses yet!
                <span className="color-tertiary"> Add Some.</span>
              </p>
            </div>
          ) : (
            <section className="address-list-section flex-col flex-align-center flex-justify-center gap-3 w-full">
              {addresses.map((address) => {
                return (
                  <div className="w-40-pc">
                    <AddressCard address={address} key={address._id} />
                  </div>
                );
              })}
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export { Addresses };
