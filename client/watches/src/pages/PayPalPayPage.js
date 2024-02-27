import { Container } from "react-bootstrap";
import PayPalPay from "../components/paypal/PayPalPay";
import Footer from "../components/footer/Footer";

const PayPalPayPage = () => {
  return (
    <Container>
      <PayPalPay />
      <Footer />
    </Container>
  );
};

export default PayPalPayPage;
