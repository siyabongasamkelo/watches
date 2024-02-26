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
            <BillingLabel>First Name</BillingLabel>
            <BillingInput
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.firstname}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel>Last Name</BillingLabel>
            <BillingInput
              type="text"
              name="lastname"
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.lastname}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel>Phone</BillingLabel>
            <BillingInput
              type="text"
              name="phone"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.phone}</ErrorLabel>}
          </div>
          <div>
            <BillingLabel>Email Address</BillingLabel>
            <BillingInput
              type="text"
              name="emailaddress"
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
            <BillingLabel>Country / Region</BillingLabel>
            <BillingInput
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
            <BillingLabel>Street Address</BillingLabel>
            <BillingInput
              type="text"
              name="streetaddress"
              value={formik.values.streetaddress}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.streetaddress}</ErrorLabel>
            )}
          </div>
          <div>
            <BillingLabel>Apartment ( Optional )</BillingLabel>
            <BillingInput
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
            <BillingLabel>Town / City</BillingLabel>
            <BillingInput
              type="text"
              name="city"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.city}</ErrorLabel>}
          </div>
          <div>
            <BillingLabel>Province</BillingLabel>
            <BillingInput
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
            <BillingLabel>Post Code / Zip</BillingLabel>
            <BillingInput
              type="text"
              name="postalcode"
              value={formik.values.postalcode}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.postalcode}</ErrorLabel>
            )}
          </div>

          <ContinueButton type="submit">Continue</ContinueButton>
        </BillingForm>
      </BillingFormCover>
    </BillingStyled>
  );
};

export default BillingDetailsForm;
