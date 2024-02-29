import { useContext } from "react";
import {
  BillingForm,
  BillingFormCover,
  BillingHeader,
  BillingInput,
  BillingLabel,
  BillingStyled,
  ContinueButton,
} from "./BillingDetailsForm.styled";
import { useFormik } from "formik";
import { BillingAddressSchema } from "../../validations/BillingAddressValidation";
import { CheckOutContext } from "../../context/CheckOutContext";
import { ErrorLabel } from "../login/Login.Styled";

const BillingDetailsForm = ({ handleNextTab }) => {
  const { updateUserData, updateBillingAddress } = useContext(CheckOutContext);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      emailaddress: "",

      country: "",
      streetaddress: "",
      apartment: "",
      city: "",
      province: "",
      postalcode: "",
    },
    validationSchema: BillingAddressSchema,
    onSubmit: async () => {
      try {
        const { firstname } = formik.values;
        const { lastname } = formik.values;
        const { emailaddress } = formik.values;
        const { phone } = formik.values;

        const { country } = formik.values;
        const { streetaddress } = formik.values;
        const { apartment } = formik.values;
        const { city } = formik.values;
        const { province } = formik.values;
        const { postalcode } = formik.values;

        updateUserData({ firstname, lastname, emailaddress, phone });
        updateBillingAddress({
          country,
          streetaddress,
          apartment,
          city,
          province,
          postalcode,
        });
        handleNextTab("shipping-address");
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  return (
    <BillingStyled>
      <BillingHeader>Billing Form</BillingHeader>
      <BillingFormCover onSubmit={formik.handleSubmit}>
        <BillingForm>
          <div>
            <BillingLabel for="firstname">First Name</BillingLabel>
            <BillingInput
              id="firstname"
              type="text"
              name="firstname"
              autocomplete="firstname"
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.firstname}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="lastname">Last Name</BillingLabel>
            <BillingInput
              id="lastname"
              type="text"
              name="lastname"
              autocomplete="lastname"
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.lastname}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="phone">Phone</BillingLabel>
            <BillingInput
              id="phone"
              type="tel"
              name="phone"
              autocomplete="phone"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.phone}</ErrorLabel>}
          </div>
          <div>
            <BillingLabel for="emailaddress">Email Address</BillingLabel>
            <BillingInput
              id="emailaddress"
              type="email"
              name="emailaddress"
              autocomplete="email"
              value={formik.values.emailaddress}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.emailaddress}</ErrorLabel>
            )}
          </div>
        </BillingForm>
        <BillingForm>
          <div></div>
          <div>
            <BillingLabel for="country">Country / Region</BillingLabel>
            <BillingInput
              id="country"
              type="text"
              name="country"
              value={formik.values.country}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.country}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="street-address">Street Address</BillingLabel>
            <BillingInput
              id="street-address"
              type="text"
              name="street-address"
              value={formik.values.streetaddress}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.streetaddress}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="apartment">Apartment ( Optional )</BillingLabel>
            <BillingInput
              id="apartment"
              type="text"
              name="apartment"
              value={formik.values.apartment}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.apartment}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="city">Town / City</BillingLabel>
            <BillingInput
              id="city"
              type="text"
              name="city"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.city}</ErrorLabel>}
          </div>
          <div>
            <BillingLabel for="province">Province</BillingLabel>
            <BillingInput
              id="province"
              type="text"
              name="province"
              value={formik.values.province}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.province}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel for="postal-code">Post Code / Zip</BillingLabel>
            <BillingInput
              id="postal-code"
              type="number"
              name="postal-code"
              value={formik.values.postalcode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.postalcode}</ErrorLabel>
            )}
          </div>

          <ContinueButton type="submit" value={"submit"}>
            Continue
          </ContinueButton>
        </BillingForm>
      </BillingFormCover>
    </BillingStyled>
  );
};

export default BillingDetailsForm;
