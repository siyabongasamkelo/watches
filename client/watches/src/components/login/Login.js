import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
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
import Spinner from "react-bootstrap/Spinner";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};
const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setLoading(true);
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
          setLoading(false);
          return showToastErrorMessage(loggingUser?.err?.response?.data);
        }

        localStorage.setItem("User", JSON.stringify(loggingUser?.data?.data));
        setLoading(false);
        console.log("loggingUser", loggingUser?.data?.data);
        updateUser(loggingUser?.data?.data);
        successToastMessage("user logged in successfully");
        setTimeout(goHome, 4000);
      } catch (err) {
        console.log(err?.message);
        setLoading(false);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <LoginStyled>
      <Header />
      <ToastContainer />
      <LoginContent>
        <LoginHeader>Login</LoginHeader>
        <LoginForm onSubmit={formik.handleSubmit}>
          <div>
            <LoginInput
              placeholder="enter your email...example@gmail.com"
              id="email"
              name="email"
              autocomplete="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors.email && (
              <ErrorLabel>{formik?.errors?.email}</ErrorLabel>
            )}
          </div>

          <div>
            <LoginInput
              id="password"
              type="password"
              placeholder="enter your password..."
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors.password && (
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

          <SubmitButton type="submit">
            {loading ? (
              <div className=" d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <span style={{ marginLeft: "10px" }}>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default Login;
