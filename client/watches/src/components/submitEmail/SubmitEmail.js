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
} from "../login/Login.Styled";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../validations/UserValidation";
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
const SubmitEmail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const { email } = formik.values;

        const confirmEmail = await postRequest(`${baseUrl}/user/confirmemail`, {
          email,
        });

        if (confirmEmail?.error) {
          showToastErrorMessage(
            "there was a problem while sending link please try again"
          );
          setLoading(false);
          return showToastErrorMessage(confirmEmail?.err?.response?.data);
        }

        setLoading(false);
        successToastMessage("link sent successfully to your email");
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
        <LoginHeader>Register Account</LoginHeader>
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

          <RegisterNowText>
            We will send confirmation link to this email...the link will expire
            in 15 minutes
          </RegisterNowText>
          <SubmitButton type="submit">
            {loading ? (
              <div className=" d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <span style={{ marginLeft: "10px" }}>Submitting email...</span>
              </div>
            ) : (
              "Submit Email"
            )}
          </SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default SubmitEmail;
