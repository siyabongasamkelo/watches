import styled from "styled-components";
import {
  BillingForm,
  BillingFormCover,
  BillingHeader,
  BillingInput,
  BillingLabel,
  BillingStyled,
  ContinueButton,
} from "./BillingDetailsForm.styled";

export const ShippingStyled = styled(BillingStyled)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShippingForm = styled(BillingForm)`
  width: 100%;
`;

export const ShippingHeader = styled(BillingHeader)``;

export const ShippingLabel = styled(BillingLabel)``;

export const ShippingCover = styled(BillingFormCover)``;

export const ShippingInput = styled(BillingInput)``;

export const ContinueShippingButton = styled(ContinueButton)`
  margin-left: 0;
  margin-top: 30px;
  width: auto;
  min-width: auto;
`;
