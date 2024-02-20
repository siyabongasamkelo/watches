import styled from "styled-components";
import { LoginHeader } from "../login/Login.Styled";
import { TextArea } from "../addItem/AddItem.styled";
import { TextBox } from "../header/Header.styled";
import { MyButton } from "../home/Home.styled";

export const ReviewFormStyled = styled.div`
  width: 30%;
  /* height: 40vh; */
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.light.tetiary};
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
  }
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
`;

export const ReviewForms = styled.form`
  width: 90%;
  height: 90%;
`;

export const ReviewInput = styled(TextBox)`
  display: block;
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
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`;
export const ReviewSubmit = styled(MyButton)`
  min-width: 100px;
  /* background-color: red; */
`;
