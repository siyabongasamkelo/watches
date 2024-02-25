import Header from "../header/Header";
import {
  CartContainer,
  CartHeader,
  CartStyled,
  CartSubTotalCover,
  CartTotal,
  CartTotalContainer,
  CartTotalHeader,
  CheckoutButton,
} from "./Cart.styled";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <CartStyled>
      <Header />
      <CartHeader>Cart</CartHeader>
      <CartContainer>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartContainer>
      <CartTotalContainer>
        <CartTotalHeader>Cart Total</CartTotalHeader>
        <CartSubTotalCover>
          <CartTotal>SUBTOTAL</CartTotal>
          <CartTotal>
            <strong>R 3000.00</strong>
          </CartTotal>
        </CartSubTotalCover>
        <CartSubTotalCover>
          <CartTotal>SHIPPING</CartTotal>
          <CartTotal>
            <strong>R 200.00</strong>
          </CartTotal>
        </CartSubTotalCover>
        <CartSubTotalCover>
          <CartTotal>TOTAL</CartTotal>
          <CartTotal>
            <strong>R 3 200.00</strong>
          </CartTotal>
        </CartSubTotalCover>
        <CheckoutButton>Proceed To Checkout</CheckoutButton>
      </CartTotalContainer>
    </CartStyled>
  );
};

export default Cart;
