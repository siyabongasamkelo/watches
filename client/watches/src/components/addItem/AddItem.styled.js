import styled from "styled-components";
import {
  LoginContent,
  LoginForm,
  LoginHeader,
  LoginInput,
} from "../login/Login.Styled";

export const AddItemStyled = styled.section`
  margin-bottom: 50px;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const AddItemContent = styled(LoginContent)``;

export const AddItemHeader = styled(LoginHeader)`
  margin-top: 5%;
`;

export const AddItemForm = styled(LoginForm)``;

export const AddItemInput = styled(LoginInput)``;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  height: 80px;
  width: 100%;
  border-radius: 10px;
  padding-left: 15px;
  padding-top: 5px;
`;
