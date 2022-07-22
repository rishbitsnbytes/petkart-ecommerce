import { removeAuthStateFromLocalStorage } from "../../utils";
import { initialAuthState } from "../../contexts";

const logoutHandler = async (currentAuthState, updateAuthState) => {
  await updateAuthState((prevAuthState) => {
    return { ...prevAuthState, ...initialAuthState };
  });

  removeAuthStateFromLocalStorage();
};

export { logoutHandler };
