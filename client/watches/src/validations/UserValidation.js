import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email("email not valid").required(),
  password: yup.string().min(3).max(14).required(),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email("email not valid").required(),
  password: yup.string().min(3).max(14).required(),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("email not valid").required(),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(3).max(14).required(),
});
