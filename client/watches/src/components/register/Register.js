import Header from "../header/Header";
import { SubmitButton } from "../login/Login.Styled";
import {
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
          <SubmitButton>Submit</SubmitButton>
        </RegisterForm>
      </RegisterContent>
    </RegisterStyled>
  );
};

export default Register;
