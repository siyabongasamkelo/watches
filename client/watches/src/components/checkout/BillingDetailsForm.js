import {
  BillingForm,
  BillingFormCover,
  BillingHeader,
  BillingInput,
  BillingLabel,
  BillingStyled,
  ContinueButton,
} from "./BillingDetailsForm.styled";

const BillingDetailsForm = ({ handleNextTab }) => {
  return (
    <BillingStyled>
      <BillingHeader>Billing Form</BillingHeader>
      <BillingFormCover>
        <BillingForm>
          <div>
            <BillingLabel>First Name</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Last Name</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Phone</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Email Address</BillingLabel>
            <BillingInput type="text" />
          </div>
        </BillingForm>
        <BillingForm>
          <div></div>
          <div>
            <BillingLabel>Country / Region</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Street Address</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Apartment ( Optional )</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Town / City</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Province</BillingLabel>
            <BillingInput type="text" />
          </div>
          <div>
            <BillingLabel>Post Code / Zip</BillingLabel>
            <BillingInput type="text" />
          </div>

          <ContinueButton
            onClick={(e) => {
              e.preventDefault();
              handleNextTab("shipping-address");
            }}
          >
            Continue
          </ContinueButton>
        </BillingForm>
      </BillingFormCover>
    </BillingStyled>
  );
};

export default BillingDetailsForm;
