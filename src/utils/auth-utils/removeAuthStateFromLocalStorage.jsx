const removeAuthStateFromLocalStorage = () => {
  localStorage.removeItem("petkart-auth-token");
  localStorage.removeItem("petkart-auth-user");
  sessionStorage.removeItem("petkart-auth-token");
  sessionStorage.removeItem("petkart-auth-user");
};

export { removeAuthStateFromLocalStorage };
