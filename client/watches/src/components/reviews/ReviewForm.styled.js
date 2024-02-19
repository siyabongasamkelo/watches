import styled from "styled-components";
import { LoginHeader } from "../login/Login.Styled";
import { TextArea } from "../addItem/AddItem.styled";

export const ReviewFormStyled = styled.div`
  width: 30%;
  height: 40vh;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.light.tetiary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewForms = styled.form`
  width: 90%;
  height: 90%;
`;

export const ReviewFormHeader = styled(LoginHeader)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ReviewTextArea = styled(TextArea)`
  width: 100%;
  margin-top: 20px;
`;

export const SubmitButtons = styled.div`
  width: 40%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
