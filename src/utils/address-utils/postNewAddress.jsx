import axios from "axios";

const postNewAddress = (newAddress, authToken) => {
  return axios.post(
    "/api/user/addresses",
    { address: { ...newAddress } },
    {
      headers: { authorization: authToken },
    }
  );
};

export { postNewAddress };
