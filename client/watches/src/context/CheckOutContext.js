import { createContext, useEffect, useState } from "react";
export const CheckOutContext = createContext();

export const CheckOutContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});

  useEffect(() => {
    const serializedUserData = JSON.stringify(userData);
  }, [userData]);

  const updateUserData = (data) => {
    setUserData(data);
  };

  const updateBillingAddress = (data) => {
    setBillingAddress(data);
  };

  const updateShippingAddress = (data) => {
    setShippingAddress(data);
  };

  return (
    <CheckOutContext.Provider
      value={{
        userData,
        billingAddress,
        shippingAddress,
        setBillingAddress,
        setShippingAddress,
        setUserData,
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
};
