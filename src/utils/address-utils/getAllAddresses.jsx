import axios from "axios";

const getAllAddresses = (authToken) => {
  return axios.get("/api/user/addresses", {
    headers: { authorization: authToken },
  });
};

export { getAllAddresses };
