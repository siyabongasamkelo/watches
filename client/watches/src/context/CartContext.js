import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    const retrievedCartState = localStorage.getItem("cart");
    const deserializedCartState = JSON.parse(retrievedCartState);
    // if (deserializedCartState) setCart(deserializedCartState);
    // setCart(deserializedCartState);
  }, []);

  useEffect(() => {
    const serializedCartState = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCartState);
    // console.log("LocalStorage", localStorage.getItem("cart"));
    const retrievedCartState = localStorage.getItem("cart");
    const deserializedCartState = JSON.parse(retrievedCartState);
    console.log("from cart", deserializedCartState);
  }, [cart]);

  // console.log("cart", cart);
  // console.log("LocalStorage", localStorage.getItem("cart"));

  const addItemToCart = (newItem) => {
    const existingItem = cart.find((item) => item._id === newItem.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      setCart([...cart, newItem]);
    }
  };

  const increaseQuamtity = (id) => {
    const index = cart.findIndex((item) => item._id === id);

    if (index !== -1) {
      cart[index].quantity = cart[index].quantity + 1;
    }
  };

  const decreaseQuamtity = (id) => {
    const index = cart.findIndex((item) => item._id === id);

    if (index !== -1) {
      cart[index].quantity = cart[index].quantity - 1;
    }
  };

  const removeItemFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        increaseQuamtity,
        decreaseQuamtity,
        removeItemFromCart,
        // total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
