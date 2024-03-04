import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("User");

    if (userFromStorage === null || userFromStorage === undefined)
      setUser(null);

    setUser(JSON.parse(userFromStorage));
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const logOut = () => {
    localStorage.removeItem("User");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
