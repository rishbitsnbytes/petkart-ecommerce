const initialAuthFormDataState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const authFormDataActionType = {
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
    case authFormDataActionType.UPDATE_FIRST_NAME: {
      return {
        ...prevAuthFormDataState,
        firstName: payload,
      };
    }

    case authFormDataActionType.UPDATE_LAST_NAME: {
      return {
        ...prevAuthFormDataState,
        lastName: payload,
      };
    }

    case authFormDataActionType.UPDATE_EMAIL: {
      return {
        ...prevAuthFormDataState,
        email: payload,
      };
    }

    case authFormDataActionType.UPDATE_PASSWORD: {
      return {
        ...prevAuthFormDataState,
        password: payload,
      };
    }

    case authFormDataActionType.UPDATE_CONFIRM_PASSWORD: {
      return {
        ...prevAuthFormDataState,
        confirmPassword: payload,
      };
    }

    case authFormDataActionType.UPDATE_REMEMBER_ME: {
      return {
        ...prevAuthFormDataState,
        rememberMe: !prevAuthFormDataState[payload],
      };
    }

    case authFormDataActionType.RESET_AUTH_FORM_DATA: {
      return {
        ...initialAuthFormDataState,
      };
    }

    case authFormDataActionType.LOGIN_WITH_TEST_CREDENTIALS: {
      return {
        ...prevAuthFormDataState,
        email: "testEmail@test.com",
        password: "testPassword",
        rememberMe: true,
      };
    }
  }
};

export { initialAuthFormDataState, authFormDataReducerFunction };
