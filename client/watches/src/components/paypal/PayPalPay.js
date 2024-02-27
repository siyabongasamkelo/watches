import { PaypaPayCover, PaypalPayStyled } from "./PayPalPay.styled";
import { CartContext } from "../../context/CartContext";
import { currencyFormatter } from "../../utils/Services";
import { useContext } from "react";
import {
  ReviewTotal,
  ReviewOrderHeader,
  ReviewTotalCover,
  ReviewTotalHeader,
} from "../checkout/ReviewOrder.styled";
import PaypalPayment from "./PaypalPayment";
import Header from "../header/Header";

const PayPalPay = () => {
  const { cart, total } = useContext(CartContext);

  const subTotal = currencyFormatter.format(total);
  const totalCost = currencyFormatter.format(total + 200);

  return (
    <PaypalPayStyled>
      <Header />
      <ReviewOrderHeader>Review Order</ReviewOrderHeader>
      <ReviewTotalHeader>Cart Totals</ReviewTotalHeader>

      <PaypaPayCover>
        <ReviewTotalCover>
          <ReviewTotal>Subtotal</ReviewTotal>

          <ReviewTotal>Total</ReviewTotal>
        </ReviewTotalCover>
        {cart.map((item) => (
          <ReviewTotalCover key={item?._id}>
            <ReviewTotal>{item?.name}</ReviewTotal>
            <ReviewTotal>{currencyFormatter.format(item?.price)}</ReviewTotal>
          </ReviewTotalCover>
        ))}
        <ReviewTotalCover>
          <ReviewTotal>Subtotal</ReviewTotal>
          <ReviewTotal>{subTotal}</ReviewTotal>
        </ReviewTotalCover>
        <ReviewTotalCover>
          <ReviewTotal>Order Total</ReviewTotal>
          <ReviewTotal>{totalCost}</ReviewTotal>
        </ReviewTotalCover>
      </PaypaPayCover>
      <PaypalPayment cart={cart} total={total} />
    </PaypalPayStyled>
  );
};

export default PayPalPay;
