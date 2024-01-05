import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticate: false,
  authenticate: (token) => {},
  logOut: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  function authenticate(token) {
    setAuthToken(token);
  }

  function logOut(token) {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticate: !!authToken,
    authenticate: authenticate,
    logOut: logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider