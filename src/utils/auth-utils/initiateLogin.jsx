import axios from "axios";
import { setAuthStateInLocalStorage } from "../../utils";

const initiateLogin = async (
  currentAuthState,
  updateAuthState,
  authFormData
) => {
  const { email, password } = authFormData;
  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", { email, password });
    if (foundUser && encodedToken) {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: encodedToken,
          isAuthenticated: true,
          user: foundUser,
          authError: null,
        };
      });
    } else {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: null,
          isAuthenticated: false,
          user: null,
          authError: "Auth-Token or User-Info received undefined from server.",
        };
      });
    }
  } catch (error) {
    if (error.message.includes("401")) {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: null,
          isAuthenticated: false,
          user: null,
          authError: "Wrong E-mail or Password. Kindly Enter correct details.",
        };
      });
    } else if (error.message.includes("404")) {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: null,
          isAuthenticated: false,
          user: null,
          authError: "Entered E-mail is not registered. Kindly Sign-Up first.",
        };
      });
    } else if (error.message.includes("500")) {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: null,
          isAuthenticated: false,
          user: null,
          authError: "Some Internal Server Error Occured. Try again later.",
        };
      });
    } else {
      updateAuthState((prevAuthState) => {
        return {
          ...prevAuthState,
          authToken: null,
          isAuthenticated: false,
          user: null,
          authError: error.message,
        };
      });
    }
  }
};

export { initiateLogin };
