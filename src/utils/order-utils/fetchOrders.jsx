import axios from "axios";
import { getAllOrders } from "../../utils";

const fetchOrders = async (ordersDispatch, authToken) => {
  try {
    const {
      data: { orders },
    } = await getAllOrders(authToken);
    ordersDispatch({
      type: "ORDERS_UPDATE",
      payload: {
        orders: orders,
        areOrdersLoading: false,
        ordersError: null,
      },
    });
  } catch (error) {
    ordersDispatch({
      type: "ORDERS_ERROR",
      payload: {
        areOrdersLoading: false,
        ordersError: `Orders could not be fetched due to some server error. Please try again. ErrorMessage: ${error}`,
      },
    });
  }
};

export { fetchOrders };
