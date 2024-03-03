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
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  // const totalCost = currencyFormatter.format(totalCostBefore);
  // const subTotal = currencyFormatter.format(subTotalBefore);

  const navigate = useNavigate();
  const goToCheckout = () => {
    if (cart?.length === 0) return;

    navigate("/checkout");
  };

  return (
    <CartStyled>
      <Header />
      <CartHeader>Cart</CartHeader>
      <CartContainer>
        {cart?.map((item) => (
          <CartItem key={item?._id} item={item} />
        ))}
        {cart?.length === 0 && (
          <CartTotalHeader>
            Cart is empty...<Link to={"/shop"}>click here </Link>to add items
          </CartTotalHeader>
        )}
      </CartContainer>
      <CartTotalContainer>
        <CartTotalHeader>Cart Total</CartTotalHeader>
        <CartSubTotalCover>
          <CartTotal>SUBTOTAL</CartTotal>
          <CartTotal>
            <strong>{currencyFormatter.format(total)}</strong>
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
            <strong>{currencyFormatter.format(total)}</strong>
          </CartTotal>
        </CartSubTotalCover>
        <CheckoutButton onClick={goToCheckout}>
          Proceed To Checkout
        </CheckoutButton>
      </CartTotalContainer>
    </CartStyled>
  );
};

export default Cart;
