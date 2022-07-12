import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
});

export const AuthProvider = ({ children }) => {
  //?children represents nested components
  const [auth, setAuth] = useState({});
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInfo === "LOGGED_IN") {
      setIsloggedIn(true);
    } //!burada bir kez çalışıyor []boş çünkü, çalıştığı zamanda app'in initial render time'i
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };

  const loginHandlder = () => {
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsloggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandlder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
