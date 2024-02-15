import * as yup from "yup";

export const itemSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
  quantity: yup.number().required(),
  description: yup.string().required(),
  image: yup
    .mixed()
    .required("image required")
    .test(
      "FILE_TYPE",
      "Invalid file type",
      (value) =>
        value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
    ),
});
