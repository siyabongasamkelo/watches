import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {
  ErrorLabel,
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginStyled,
  RegisterNowText,
  SubmitButton,
} from "./Login.Styled";
import { useFormik } from "formik";
import { LoginSchema } from "../../validations/UserValidation";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const showToastErrorMessage = (message) => {
    toast.error(message);
  };

  const successToastMessage = (message) => {
    toast.success(message);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      try {
        const { email } = formik.values;
        const { password } = formik.values;

        const loggingUser = await postRequest(`${baseUrl}/user/login`, {
          email,
          password,
        });

        if (loggingUser?.error) {
          showToastErrorMessage(
            "there was a problem while logging you in please try again"
          );
          return showToastErrorMessage(loggingUser?.err?.response?.data);
        }

        localStorage.setItem("User", JSON.stringify(loggingUser?.data?.data));
        successToastMessage("user logged in successfully");
      } catch (err) {
        console.log(err.message);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  console.log(formik);

  return (
    <LoginStyled>
      <Header />
      <ToastContainer />
      <LoginContent>
        <LoginHeader>Login</LoginHeader>
        <LoginForm onSubmit={formik.handleSubmit}>
          <div>
            <LoginInput
              placeholder="enter your email..."
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.email}</ErrorLabel>}
          </div>

          <div>
            <LoginInput
              type="password"
              placeholder="enter your password..."
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.password}</ErrorLabel>
            )}
          </div>

          <RegisterNowText>
            Don't have an account <Link to={"/register"}>register</Link> now
          </RegisterNowText>

          <RegisterNowText>
            <Link to={"/forgot-password"}>forgot password ?</Link> click here to
            reset
          </RegisterNowText>

          <SubmitButton type="submit">Submit</SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default Login;
