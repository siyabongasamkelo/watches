import {
  PaymentMethod,
  PaymentMethodCover,
  ReviewOrderCover,
  ReviewOrderHeader,
  ReviewOrderStyled,
  ReviewTotal,
  ReviewTotalCover,
  ReviewTotalHeader,
} from "./ReviewOrder.styled";

const ReviewOrder = () => {
  return (
    <ReviewOrderStyled>
      <ReviewOrderHeader>Review Order</ReviewOrderHeader>
      <ReviewTotalHeader>Cart Totals</ReviewTotalHeader>
      <ReviewOrderCover>
        <ReviewTotalCover>
          <ReviewTotal>Subtotal</ReviewTotal>
          <ReviewTotal>Total</ReviewTotal>
        </ReviewTotalCover>
        <ReviewTotalCover>
          <ReviewTotal>Nano 935</ReviewTotal>
          <ReviewTotal>R 4000.00</ReviewTotal>
        </ReviewTotalCover>
        <ReviewTotalCover>
          <ReviewTotal>Subtotal</ReviewTotal>
          <ReviewTotal>R 4000.00</ReviewTotal>
        </ReviewTotalCover>
        <ReviewTotalCover>
          <ReviewTotal>Order Total</ReviewTotal>
          <ReviewTotal>R 4200.00</ReviewTotal>
        </ReviewTotalCover>
      </ReviewOrderCover>
      <PaymentMethodCover>
        <ReviewTotalHeader>PayMent Method</ReviewTotalHeader>
        <ul>
          <li>
            <strong>PayPal</strong>
          </li>
        </ul>
      </PaymentMethodCover>
    </ReviewOrderStyled>
  );
};

export default ReviewOrder;
