import {
  couponsDataReducerFunction,
  initialCouponsDataState,
} from "../../reducers";
import { fetchCouponsData } from "../../utils";
import { useReducer, useEffect } from "react";

const useCouponsData = () => {
  const [couponsDataState, couponsDataDispatch] = useReducer(
    couponsDataReducerFunction,
    initialCouponsDataState
  );

  useEffect(() => {
    fetchCouponsData(couponsDataDispatch);
  }, []);

  return { couponsDataState: { ...couponsDataState }, couponsDataDispatch };
};

export { useCouponsData };
