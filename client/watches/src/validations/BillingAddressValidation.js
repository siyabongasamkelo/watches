import * as yup from "yup";

export const BillingAddressSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  category: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required().email(),
  country: yup.string().required(),
  streetaddress: yup.string().required(),
  apartment: yup.string(),
  city: yup.string().required(),
  province: yup.string().required(),
  postcode: yup.string().required(),
});
