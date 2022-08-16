import axios from "axios";

const fetchCouponsData = async (couponsDataDispatch) => {
  try {
    const {
      data: { coupons: receivedCoupons },
    } = await axios.get("/api/coupons");
    couponsDataDispatch({
      type: "COUPONS_DATA_UPDATE",
      payload: receivedCoupons,
    });
  } catch (error) {
    couponsDataDispatch({
      type: "COUPONS_DATA_ERROR",
      payload: `Some Internal Server Error occured while fetching Coupons Data. 
            Error Message: ${error.message}
            Full Error: ${error}
            `,
    });
  }
};

export { fetchCouponsData };
