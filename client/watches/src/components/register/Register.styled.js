import styled from "styled-components";
import {
  LoginForm,
  LoginHeader,
  LoginInput,
  RegisterNowText,
} from "../login/Login.Styled";

export const RegisterStyled = styled.section`
  width: 100%;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const RegisterContent = styled.div`
  height: 70vh;
  width: 100%;
`;

export const LoginNowText = styled(RegisterNowText)``;

export const RegisterHeader = styled(LoginHeader)``;

export const RegisterForm = styled(LoginForm)``;

export const RegisterInput = styled(LoginInput)``;
