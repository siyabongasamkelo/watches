import styled from "styled-components";
import { PopularProductsHeader } from "../popularProducts/PopularProducts.styled";
import { TextBox } from "../header/Header.styled";
import { MyButton } from "../home/Home.styled";

export const LoginStyled = styled.section`
  width: 100%;
`;

export const LoginContent = styled.div`
  height: 70vh;
  width: 100%;
`;

export const LoginHeader = styled(PopularProductsHeader)`
  margin-top: 15%;
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    height: 50%;
    margin: 0% 0 0 38%;
    border-radius: 10px;
  }
`;

export const LoginLabel = styled.div``;

export const LoginInput = styled(TextBox)`
  margin-top: 30px;
  width: 100%;
  display: block;
`;

export const SubmitButton = styled(MyButton)`
  width: 100%;
  margin-top: 30px;
`;
