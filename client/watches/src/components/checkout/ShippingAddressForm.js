import {
  ContinueShippingButton,
  ShippingCover,
  ShippingForm,
  ShippingHeader,
  ShippingInput,
  ShippingLabel,
  ShippingStyled,
} from "./ShippingAddressForm.styled";
import { useFormik } from "formik";
import { CheckOutContext } from "../../context/CheckOutContext";
import { ErrorLabel } from "../login/Login.Styled";
import { useContext } from "react";
import { ShippingAddressSchema } from "../../validations/ShippingAddressValidation";

const ShippingAddressForm = ({ handleNextTab }) => {
  const { updateShippingAddress } = useContext(CheckOutContext);

  const formik = useFormik({
    initialValues: {
      country: "",
      streetaddress: "",
      apartment: "",
      city: "",
      province: "",
      postalcode: "",
    },
    validationSchema: ShippingAddressSchema,
    onSubmit: async () => {
      try {
        const { country } = formik.values;
        const { streetaddress } = formik.values;
        const { apartment } = formik.values;
        const { city } = formik.values;
        const { province } = formik.values;
        const { postalcode } = formik.values;

        updateShippingAddress({
          country,
          streetaddress,
          apartment,
          city,
          province,
          postalcode,
        });

        handleNextTab("review-order");
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  return (
    <ShippingStyled>
      <ShippingHeader>Shipping Address</ShippingHeader>
      <ShippingCover onSubmit={formik.handleSubmit}>
        <ShippingForm>
          <div>
            <ShippingLabel>Country / Region</ShippingLabel>
            <ShippingInput
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
            <ShippingLabel>Street Address</ShippingLabel>
            <ShippingInput
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
            <ShippingLabel>Apartment ( Optional )</ShippingLabel>
            <ShippingInput
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
            <ShippingLabel>Town / City</ShippingLabel>
            <ShippingInput
              type="text"
              name="city"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.city}</ErrorLabel>}
          </div>
          <div>
            <ShippingLabel>Province</ShippingLabel>
            <ShippingInput
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
            <ShippingLabel>Post Code / Zip</ShippingLabel>
            <ShippingInput
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "30px",
            }}
          >
            <ContinueShippingButton
              onClick={(e) => {
                e.preventDefault();
                handleNextTab("billing-details");
              }}
            >
              Go Back To Billing Form
            </ContinueShippingButton>
            <ContinueShippingButton
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleNextTab("review-order");
              // }}
              type="submit"
            >
              Continue
            </ContinueShippingButton>
          </div>
        </ShippingForm>
      </ShippingCover>
    </ShippingStyled>
  );
};

export default ShippingAddressForm;
