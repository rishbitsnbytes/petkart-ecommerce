import axios from "axios";

const getAllOrders = async (authToken) => {
  return axios.get("/api/user/orders", {
    headers: { authorization: authToken },
  });
};

export { getAllOrders };
