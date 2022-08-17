import axios from "axios";

const editAddress = async (address, authToken) => {
  return axios.post(
    `/api/user/addresses/edit/${address._id}`,
    { address: { ...address } },
    { headers: { authorization: authToken } }
  );
};

export { editAddress };
