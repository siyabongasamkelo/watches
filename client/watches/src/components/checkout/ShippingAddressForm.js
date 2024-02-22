import {
  ContinueShippingButton,
  ShippingCover,
  ShippingForm,
  ShippingHeader,
  ShippingInput,
  ShippingLabel,
  ShippingStyled,
} from "./ShippingAddressForm.styled";

const ShippingAddressForm = ({ handleNextTab }) => {
  return (
    <ShippingStyled>
      <ShippingHeader>Shipping Address</ShippingHeader>
      <ShippingCover>
        <ShippingForm>
          <div>
            <ShippingLabel>Country / Region</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div>
            <ShippingLabel>Street Address</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div>
            <ShippingLabel>Apartment ( Optional )</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div>
            <ShippingLabel>Town / City</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div>
            <ShippingLabel>Province</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div>
            <ShippingLabel>Post Code / Zip</ShippingLabel>
            <ShippingInput type="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "30px",
            }}
          >
            <ContinueShippingButton onClick={handleNextTab("billing-details")}>
              Go Back To Billing Form
            </ContinueShippingButton>
            <ContinueShippingButton onClick={handleNextTab("review-order")}>
              Continue
            </ContinueShippingButton>
          </div>
        </ShippingForm>
      </ShippingCover>
    </ShippingStyled>
  );
};

export default ShippingAddressForm;
