import axios from "axios";

const postNewOrder = async (order, authToken) => {
  return axios.post(
    "/api/user/orders",
    {
      order: { ...order },
    },
    {
      headers: { authorization: authToken },
    }
  );
};

export { postNewOrder };
