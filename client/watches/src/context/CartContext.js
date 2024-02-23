import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log("cart", cart);

  const addItemToCart = (newItem) => {
    const existingItem = cart.find((item) => item.id === newItem.id);

    if (existingItem) {
      // If the item already exists, increment the quantity
      existingItem.quantity += 1;
    } else {
      // If the item does not exist, add the new item to the array
      setCart([...cart, newItem]);
    }
  };

  const increaseQuamtity = (id) => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      // If the item already exists, update the quantity
      cart[index].quantity = cart[index].quantity + 1;
    }
  };

  const decreaseQuamtity = (id) => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      // If the item already exists, update the quantity
      cart[index].quantity = cart[index].quantity - 1;
    }
  };

  const removeItemFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        increaseQuamtity,
        decreaseQuamtity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
