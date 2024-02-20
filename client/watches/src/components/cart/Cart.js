import Header from "../header/Header";
import { CartContainer, CartHeader, CartStyled } from "./Cart.styled";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <CartStyled>
      <Header />
      <CartHeader>Cart</CartHeader>
      <CartContainer>
        <CartItem />
        <CartItem />
      </CartContainer>
    </CartStyled>
  );
};

export default Cart;
