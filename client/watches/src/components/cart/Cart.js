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
import { currencyFormatter } from "../../utils/Services";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const totalCost = currencyFormatter.format(total + 200);
  const subTotal = currencyFormatter.format(total + 200);

  return (
    <CartStyled>
      <Header />
      <CartHeader>Cart</CartHeader>
      <CartContainer>
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </CartContainer>
      <CartTotalContainer>
        <CartTotalHeader>Cart Total</CartTotalHeader>
        <CartSubTotalCover>
          <CartTotal>SUBTOTAL</CartTotal>
          <CartTotal>
            <strong>{subTotal}</strong>
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
            <strong>{totalCost}</strong>
          </CartTotal>
        </CartSubTotalCover>
        <Link to={"/checkout"}>
          <CheckoutButton>Proceed To Checkout</CheckoutButton>
        </Link>
      </CartTotalContainer>
    </CartStyled>
  );
};

export default Cart;
