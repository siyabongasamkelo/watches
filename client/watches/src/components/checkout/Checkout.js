import Header from "../header/Header";
import BillingDetailsForm from "./BillingDetailsForm";
import { CheckOutCover, CheckoutStyled } from "./Checkout.styled";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Checkout = () => {
  return (
    <CheckoutStyled>
      <Header />
      <CheckOutCover>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="billing-details" title={"1 billing details"}>
            <BillingDetailsForm />
          </Tab>
          <Tab eventKey="shipping-address" title="2 shipping address">
            Tab content for Profile
          </Tab>
          <Tab eventKey="review-order" title={"3 review order"}>
            Tab content for Contact
          </Tab>
        </Tabs>
      </CheckOutCover>
    </CheckoutStyled>
  );
};

export default Checkout;
