import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const storedData = localStorage.getItem("User");
  // const parsedData = JSON.parse(storedData);
  // console.log("userDATA", parsedData);

  console.log("user", user);

  useEffect(() => {
    const user = localStorage.getItem("User");

    setUser(JSON.parse(user));
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
