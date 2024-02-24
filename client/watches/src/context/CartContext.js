import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log("cart", cart);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
