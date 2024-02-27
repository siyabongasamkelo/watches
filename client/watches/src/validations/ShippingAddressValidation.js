import * as yup from "yup";

export const ShippingAddressSchema = yup.object().shape({
  country: yup.string().required(),
  streetaddress: yup.string().required(),
  apartment: yup.string(),
  city: yup.string().required(),
  province: yup.string().required(),
  postalcode: yup.string().required(),
});
