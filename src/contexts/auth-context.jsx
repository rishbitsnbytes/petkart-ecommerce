import { useContext, createContext, useState, useEffect } from "react";

const initialAuthState = {
  authToken: null,
  isAuthenticated: false,
  user: null,
  authError: null,
};
const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const setInitialAuthState = () => {
    const petkartAuthToken =
      localStorage.getItem("petkart-auth-token") ||
      sessionStorage.getItem("petkart-auth-token");
    const petkartAuthUser = JSON.parse(
      localStorage.getItem("petkart-auth-user") ||
        sessionStorage.getItem("petkart-auth-user")
    );
    if (petkartAuthToken) {
      return {
        authToken: petkartAuthToken,
        isAuthenticated: true,
        user: petkartAuthUser,
        authError: null,
      };
    }
    return initialAuthState;
  };

  const [authState, setAuthState] = useState(setInitialAuthState);

  return (
    <AuthContext.Provider value={{ authState: { ...authState }, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider, initialAuthState };
