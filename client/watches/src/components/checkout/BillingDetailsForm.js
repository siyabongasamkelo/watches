import {
  BillingForm,
  BillingInput,
  BillingLabel,
  BillingStyled,
} from "./BillingDetailsForm.styled";

const BillingDetailsForm = () => {
  return (
    <BillingStyled>
      <BillingForm>
        <BillingLabel>First Name</BillingLabel>
        <BillingInput type="text" />
      </BillingForm>
    </BillingStyled>
  );
};

export default BillingDetailsForm;
