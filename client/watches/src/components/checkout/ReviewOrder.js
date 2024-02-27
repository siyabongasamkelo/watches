import {
  PaymentMethodCover,
  ReviewOrderCover,
  ReviewOrderHeader,
  ReviewOrderStyled,
  ReviewTotal,
  ReviewTotalCover,
  ReviewTotalHeader,
} from "./ReviewOrder.styled";
import { Paypal } from "react-bootstrap-icons";
import { ContinueShippingButton } from "./ShippingAddressForm.styled";
import { CartContext } from "../../context/CartContext";
import { currencyFormatter } from "../../utils/Services";
import { useContext } from "react";

const ReviewOrder = () => {
  const { cart, total } = useContext(CartContext);

  const subTotal = currencyFormatter.format(total);
  const totalCost = currencyFormatter.format(total + 200);
  return (
    <ReviewOrderStyled>
      <ReviewOrderHeader>Review Order</ReviewOrderHeader>
      <ReviewTotalHeader>Cart Totals</ReviewTotalHeader>
      <ReviewOrderCover>
        <ReviewTotalCover>
          <ReviewTotal>Subtotal</ReviewTotal>
          <ReviewTotal>Total</ReviewTotal>
        </ReviewTotalCover>
        {cart.map((item) => (
          <ReviewTotalCover>
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
      </ReviewOrderCover>
      <PaymentMethodCover>
        <ReviewTotalHeader>PayMent Method</ReviewTotalHeader>
        <ul>
          <li>
            <strong>
              <Paypal /> &emsp; PayPal
            </strong>
          </li>
        </ul>
      </PaymentMethodCover>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <ContinueShippingButton>
          Go Back To Shipping Address
        </ContinueShippingButton>
        <ContinueShippingButton>Place Order</ContinueShippingButton>
      </div>
    </ReviewOrderStyled>
  );
};

export default ReviewOrder;
