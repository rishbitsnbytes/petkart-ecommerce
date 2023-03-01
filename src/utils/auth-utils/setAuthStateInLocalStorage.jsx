const setAuthStateInLocalStorage = (authState, setAuthState, authFormData) => {
  const { rememberMe } = authFormData;
  const { authToken, isAuthenticated, user, authError } = authState;
  const doesTokenExistInLocalStorage = localStorage.getItem(
    "petkart-auth-token"
  )
    ? true
    : false;

  const doesTokenExistInSessionStorage = sessionStorage.getItem(
    "petkart-auth-token"
  )
    ? true
    : false;

  if (!(doesTokenExistInLocalStorage || doesTokenExistInSessionStorage)) {
    if (!authError && isAuthenticated) {
      if (rememberMe) {
        localStorage.setItem("petkart-auth-token", authToken);
        localStorage.setItem("petkart-auth-user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("petkart-auth-token", authToken);
        sessionStorage.setItem("petkart-auth-user", JSON.stringify(user));
      }
    }
  }
};

export { setAuthStateInLocalStorage };
