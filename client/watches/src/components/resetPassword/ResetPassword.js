import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  ErrorLabel,
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginStyled,
  RegisterNowText,
  SubmitButton,
} from "../login/Login.Styled";
import { useFormik } from "formik";
import { LoginSchema } from "../../validations/UserValidation";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};
const ResetPassword = () => {
  let { userId } = useParams();
  let { token } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const { password } = formik.values;
        const { email } = formik.values;

        console.log(`${baseUrl}/user/resetpassword/${userId}/${token}`);
        const changePassword = await postRequest(
          `${baseUrl}/user/resetpassword/${userId}/${token}`,
          {
            password,
            email,
          }
        );

        if (changePassword?.error) {
          showToastErrorMessage(
            "there was a problem changing password please try again"
          );
          setLoading(false);
          return showToastErrorMessage(changePassword?.err?.response?.data);
        }

        setLoading(false);
        successToastMessage("password changed successfully");
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
        <LoginHeader>Reset Password</LoginHeader>
        <LoginForm onSubmit={formik.handleSubmit}>
          <div>
            <LoginInput
              placeholder="enter your email...example@gmail.com"
              type="email"
              id="email"
              name="email"
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
              placeholder="enter a strong password"
              type="password"
              id="password"
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
            We will send recovery link to this email
          </RegisterNowText>
          <SubmitButton type="submit" value={"submit"}>
            {loading ? (
              <div className=" d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <span style={{ marginLeft: "10px" }}>Changing password...</span>
              </div>
            ) : (
              "Change password"
            )}
          </SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default ResetPassword;
