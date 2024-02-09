import { Link } from "react-router-dom";
import Header from "../header/Header";
import { SubmitButton } from "../login/Login.Styled";
import {
  LoginNowText,
  RegisterContent,
  RegisterForm,
  RegisterHeader,
  RegisterInput,
  RegisterStyled,
} from "./Register.styled";

const Register = () => {
  return (
    <RegisterStyled>
      <Header />
      <RegisterContent>
        <RegisterHeader>Register</RegisterHeader>
        <RegisterForm>
          <RegisterInput placeholder="type username..." />
          <RegisterInput placeholder="type email..." />
          <RegisterInput placeholder="type password..." />
          <RegisterInput placeholder="confirm password..." />
          <LoginNowText>
            Already have an account <Link to={"/login"}>Login</Link> now
          </LoginNowText>
          <SubmitButton>Submit</SubmitButton>
        </RegisterForm>
      </RegisterContent>
    </RegisterStyled>
  );
};

export default Register;
