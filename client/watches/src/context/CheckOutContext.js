import { createContext, useEffect, useState } from "react";
export const CheckOutContext = createContext();

export const CheckOutContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});

  useEffect(() => {
    const retrievedUserData = localStorage.getItem("userData");
    const deserializedUserData = JSON.parse(retrievedUserData);
    if (deserializedUserData) setUserData(deserializedUserData);

    const retrievedBillingAddress = localStorage.getItem("billingAddress");
    const deserializedBillingAddress = JSON.parse(retrievedBillingAddress);
    if (deserializedBillingAddress)
      setBillingAddress(deserializedBillingAddress);

    const retrievedShippingAddress = localStorage.getItem("shippingAddress");
    const deserializedShippingAddress = JSON.parse(retrievedShippingAddress);
    if (deserializedShippingAddress)
      setShippingAddress(deserializedShippingAddress);
  }, []);

  useEffect(() => {
    const serializedUserData = JSON.stringify(userData);
    localStorage.setItem("userData", serializedUserData);
  }, [userData]);

  useEffect(() => {
    const serializedBillingAddress = JSON.stringify(billingAddress);
    localStorage.setItem("billingAddress", serializedBillingAddress);
  }, [billingAddress]);

  useEffect(() => {
    const serializedShippingAddress = JSON.stringify(shippingAddress);
    localStorage.setItem("shippingAddress", serializedShippingAddress);
  }, [shippingAddress]);

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
        updateBillingAddress,
        updateShippingAddress,
        updateUserData,
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
};
