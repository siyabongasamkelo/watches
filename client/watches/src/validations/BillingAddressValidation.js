import * as yup from "yup";

export const BillingAddressSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.string().required(),
  emailaddress: yup.string().required().email(),
  country: yup.string().required(),
  streetaddress: yup.string().required(),
  apartment: yup.string(),
  city: yup.string().required(),
  province: yup.string().required(),
  postalcode: yup.string().required(),
});
