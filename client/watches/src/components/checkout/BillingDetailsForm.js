import {
  BillingForm,
  BillingFormCover,
  BillingHeader,
  BillingInput,
  BillingLabel,
  BillingStyled,
} from "./BillingDetailsForm.styled";
import { CountryDropdown } from "react-select-country-list";

const BillingDetailsForm = () => {
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
          <div>
            {/* <CountryDropdown
              value="US" // Set a default value if needed
            /> */}
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
      </BillingFormCover>
    </BillingStyled>
  );
};

export default BillingDetailsForm;
