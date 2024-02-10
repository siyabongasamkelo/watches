import { Link } from "react-router-dom";
import Header from "../header/Header";
import { ErrorLabel, SubmitButton } from "../login/Login.Styled";
import {
  LoginNowText,
  RegisterContent,
  RegisterForm,
  RegisterHeader,
  RegisterInput,
  RegisterStyled,
} from "./Register.styled";
import { useFormik } from "formik";
import { userSchema } from "../../validations/UserValidation";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const showToastErrorMessage = (message) => {
    toast.error(message);
  };

  const successToastMessage = (message) => {
    toast.success(message);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      conPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: async () => {
      try {
        const { username } = formik.values;
        const { email } = formik.values;
        const { password } = formik.values;

        const RegisterUser = await postRequest(`${baseUrl}/user/register`, {
          username,
          email,
          password,
        });

        if (RegisterUser.error) {
          showToastErrorMessage(
            "there was a problem while registering you please try again"
          );
          return showToastErrorMessage(RegisterUser?.err?.response?.data);
        }

        localStorage.setItem("User", JSON.stringify(RegisterUser.data.data));
        successToastMessage("user registered successfully");
      } catch (err) {
        console.log(err.message);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <RegisterStyled>
      <Header />
      <RegisterContent>
        <RegisterHeader>Register</RegisterHeader>
        <RegisterForm onSubmit={formik.handleSubmit}>
          <ToastContainer />
          <div>
            <RegisterInput
              placeholder="type username..."
              type="text"
              name="username"
              value={formik.values.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors && <ErrorLabel>{formik.errors.username}</ErrorLabel>}
          </div>

          <div>
            <RegisterInput
              placeholder="type email..."
              type="email"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <ErrorLabel>{formik.errors.email}</ErrorLabel>
          </div>

          <div>
            <RegisterInput
              placeholder="type password..."
              type="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <ErrorLabel>{formik.errors.password}</ErrorLabel>
          </div>

          <div>
            <RegisterInput
              placeholder="confirm password..."
              type="password"
              name="conPassword"
              value={formik.values.conPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <ErrorLabel>{formik.errors.conPassword}</ErrorLabel>
          </div>
          <LoginNowText>
            Already have an account <Link to={"/login"}>Login</Link> now
          </LoginNowText>
          <SubmitButton type="submit">Submit</SubmitButton>
        </RegisterForm>
      </RegisterContent>
    </RegisterStyled>
  );
};

export default Register;
