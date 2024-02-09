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
import { toast } from "react-toastify";

const Register = () => {
  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const succToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
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
      const { username } = formik.values;
      const { email } = formik.values;
      const { password } = formik.values;

      const RegisterUser = await postRequest(`${baseUrl}/user/register`, {
        username,
        email,
        password,
      });

      console.log(RegisterUser);

      if (RegisterUser.error) {
        showToastMessage(RegisterUser.message);
      } else {
        succToastMessage(RegisterUser.message);
      }
    },
  });

  console.log(formik.errors);

  return (
    <RegisterStyled>
      <Header />
      <RegisterContent>
        <RegisterHeader>Register</RegisterHeader>
        <RegisterForm onSubmit={formik.handleSubmit}>
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
