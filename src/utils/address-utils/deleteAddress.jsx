import axios from "axios";

const deleteAddress = (addressId, authToken) => {
  return axios.delete(`/api/user/addresses/${addressId}`, {
    headers: { authorization: authToken },
  });
};
export { deleteAddress };
