import styled from "styled-components";
import { TextBox } from "../header/Header.styled";
import { CategoriesHeader } from "../categories/Categories";
import { MyButton } from "../home/Home.styled";

export const BillingStyled = styled.div`
  margin-bottom: 30px;
`;

export const BillingForm = styled.form`
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const BillingFormCover = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const BillingHeader = styled(CategoriesHeader)``;

export const BillingLabel = styled.label`
  margin: 10px 0 10px 45px;
`;

export const BillingInput = styled(TextBox)`
  display: block;
  margin-left: 30px;
`;

export const ContinueButton = styled(MyButton)`
  margin: 30px 0 10px 30px;
`;
