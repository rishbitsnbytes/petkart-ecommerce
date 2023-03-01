import axios from "axios";

const initiateSignup = async (
  currentAuthState,
  updateAuthState,
  authFormData
) => {
  const { firstName, lastName, email, password } = authFormData;
  try {
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    if (createdUser && encodedToken) {
      updateAuthState((prevAuthState) => ({
        ...prevAuthState,
        authToken: encodedToken,
        isAuthenticated: true,
        user: createdUser,
        authError: null,
      }));
    } else {
      updateAuthState((prevAuthState) => ({
        ...prevAuthState,
        authToken: null,
        isAuthenticated: false,
        user: null,
        authError: "Auth-Token or User-Info received undefined from server.",
      }));
      throw "Auth-Token or User-Info received undefined from server.";
    }
  } catch (error) {
    if (error.message.includes("422")) {
      updateAuthState((prevAuthState) => ({
        ...prevAuthState,
        authToken: null,
        isAuthenticated: false,
        user: null,
        authError:
          "Email already exist! Either signup with different Email or Proceed to Login if you are already an user.",
      }));
      throw "Email already exist! Either signup with different Email or Proceed to Login if you are already an user.";
    } else if (error.message.includes("500")) {
      updateAuthState((prevAuthState) => ({
        ...prevAuthState,
        authToken: null,
        isAuthenticated: false,
        user: null,
        authError: "Some Internal Server Error Occured. Try again later.",
      }));
      throw "Some Internal Server Error Occured. Try again later.";
    } else {
      updateAuthState((prevAuthState) => ({
        ...prevAuthState,
        authToken: null,
        isAuthenticated: false,
        user: null,
        authError: error.message,
      }));
      throw error.message;
    }
  }
};

export { initiateSignup };
