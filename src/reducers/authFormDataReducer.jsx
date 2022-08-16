const initialAuthFormDataState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const authFormDataActionTypes = {
  UPDATE_FIRST_NAME: "UPDATE_FIRST_NAME",
  UPDATE_LAST_NAME: "UPDATE_LAST_NAME",
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  UPDATE_CONFIRM_PASSWORD: "UPDATE_CONFIRM_PASSWORD",
  UPDATE_REMEMBER_ME: "UPDATE_REMEMBER_ME",
  RESET_AUTH_FORM_DATA: "CLEAR_AUTH_FORM_DATA",
  LOGIN_WITH_TEST_CREDENTIALS: "LOGIN_WITH_TEST_CREDENTIALS",
};

const authFormDataReducerFunction = (
  prevAuthFormDataState,
  { type, payload }
) => {
  switch (type) {
    case authFormDataActionTypes.UPDATE_FIRST_NAME: {
      return {
        ...prevAuthFormDataState,
        firstName: payload,
      };
    }

    case authFormDataActionTypes.UPDATE_LAST_NAME: {
      return {
        ...prevAuthFormDataState,
        lastName: payload,
      };
    }

    case authFormDataActionTypes.UPDATE_EMAIL: {
      return {
        ...prevAuthFormDataState,
        email: payload,
      };
    }

    case authFormDataActionTypes.UPDATE_PASSWORD: {
      return {
        ...prevAuthFormDataState,
        password: payload,
      };
    }

    case authFormDataActionTypes.UPDATE_CONFIRM_PASSWORD: {
      return {
        ...prevAuthFormDataState,
        confirmPassword: payload,
      };
    }

    case authFormDataActionTypes.UPDATE_REMEMBER_ME: {
      return {
        ...prevAuthFormDataState,
        rememberMe: !prevAuthFormDataState[payload],
      };
    }

    case authFormDataActionTypes.RESET_AUTH_FORM_DATA: {
      return {
        ...initialAuthFormDataState,
      };
    }

    case authFormDataActionTypes.LOGIN_WITH_TEST_CREDENTIALS: {
      return {
        ...prevAuthFormDataState,
        email: "testSingh@test.com",
        password: "testPassword",
        rememberMe: true,
      };
    }

    default:
      return { ...initialAuthFormDataState };
  }
};

export { initialAuthFormDataState, authFormDataReducerFunction };
