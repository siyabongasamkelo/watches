import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginStyled,
  RegisterNowText,
  SubmitButton,
} from "./Login.Styled";

const Login = () => {
  return (
    <LoginStyled>
      <Header />
      <LoginContent>
        <LoginHeader>Login</LoginHeader>
        <LoginForm>
          <LoginInput placeholder="enter your email..." />
          <LoginInput placeholder="enter your password..." />
          <RegisterNowText>
            Don't have an account <Link to={"/register"}>register</Link> now
          </RegisterNowText>

          <RegisterNowText>
            <Link to={"/forgot-password"}>forgot password ?</Link> click here to
            reset
          </RegisterNowText>

          <SubmitButton>Submit</SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default Login;
