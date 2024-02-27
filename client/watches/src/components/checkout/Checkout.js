import { useState } from "react";
import Header from "../header/Header";
import BillingDetailsForm from "./BillingDetailsForm";
import { CheckOutCover, CheckoutStyled } from "./Checkout.styled";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShippingAddressForm from "./ShippingAddressForm";
import ReviewOrder from "./ReviewOrder";

const Checkout = () => {
  const [activeTab, setActiveTab] = useState("review-order");

  const handleNextTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <CheckoutStyled>
      <Header />
      <CheckOutCover>
        <Tabs
          defaultActiveKey="billing-details"
          id="fill-tab-example"
          className="mb-3"
          activeKey={activeTab}
          fill
        >
          <Tab eventKey="billing-details" title={"1 billing details"}>
            <BillingDetailsForm handleNextTab={handleNextTab} />
          </Tab>
          <Tab eventKey="shipping-address" title="2 shipping address">
            <ShippingAddressForm handleNextTab={handleNextTab} />
          </Tab>
          <Tab eventKey="review-order" title={"3 review order"}>
            <ReviewOrder />
          </Tab>
        </Tabs>
      </CheckOutCover>
    </CheckoutStyled>
  );
};

export default Checkout;
