import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const retrievedCartState = localStorage.getItem("cart");
    const deserializedCartState = JSON.parse(retrievedCartState);
    if (deserializedCartState) setCart(deserializedCartState);
    setCart(deserializedCartState);
  }, []);

  useEffect(() => {
    const serializedCartState = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCartState);
  }, [cart]);

  useEffect(() => {
    const totalCost = cart?.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(totalCost);
  }, [cart]);

  const addItemToCart = (newItem) => {
    const existingItem = cart?.find((item) => item._id === newItem._id);

    if (existingItem !== undefined) return;
    setCart([...cart, newItem]);
  };

  const increaseQuamtity = (id) => {
    const index = cart?.findIndex((item) => item._id === id);

    if (index === -1) return;
    if (cart[index].quantity === 10) return;

    if (index !== -1) {
      const newQuantity = cart[index].quantity + 1;

      setCart((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const decreaseQuamtity = (id) => {
    const index = cart?.findIndex((item) => item._id === id);

    if (index === -1) return;
    if (cart[index].quantity === 1) return;

    const newQuantity = cart[index].quantity - 1;

    if (index !== -1) {
      setCart((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
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
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
