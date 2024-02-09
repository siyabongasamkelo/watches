import Footer from "../footer/Footer";
import Header from "../header/Header";
import {
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginStyled,
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
          <SubmitButton>Submit</SubmitButton>
        </LoginForm>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default Login;
