import styled from "styled-components";
import { TextBox } from "../header/Header.styled";
import { CategoriesHeader } from "../categories/Categories";

export const BillingStyled = styled.div``;

export const BillingForm = styled.form`
  width: 30%;
`;

export const BillingFormCover = styled.div`
  display: flex;
`;

export const BillingHeader = styled(CategoriesHeader)``;

export const BillingLabel = styled.label`
  margin-left: 45px;
  margin-bottom: 10px;
`;

export const BillingInput = styled(TextBox)`
  display: block;
  margin-left: 30px;
`;
