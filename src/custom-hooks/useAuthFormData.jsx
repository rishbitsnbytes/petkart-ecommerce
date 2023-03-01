import { useReducer } from "react";
import {
  initialAuthFormDataState,
  authFormDataReducerFunction,
} from "../reducers";

const useAuthFormData = () => {
  const [authFormDataState, authFormDataDispatch] = useReducer(
    authFormDataReducerFunction,
    initialAuthFormDataState
  );

  return [authFormDataState, authFormDataDispatch];
};

export { useAuthFormData };
