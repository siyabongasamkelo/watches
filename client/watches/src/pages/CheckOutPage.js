import { Container } from "react-bootstrap";
import Checkout from "../components/checkout/Checkout";
import Footer from "../components/footer/Footer";
const CheckOutPage = () => {
  return (
    <Container>
      <Checkout />
      <Footer />
    </Container>
  );
};

export default CheckOutPage;
