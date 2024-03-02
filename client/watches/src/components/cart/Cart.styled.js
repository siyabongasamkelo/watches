import styled from "styled-components";
import { LoginHeader } from "../login/Login.Styled";
import { GetHelpHeader } from "../footer/Footer.styled";
import { Price } from "./CartItem.styled";
import { MyButton } from "../ProductCard.styled";

export const CartStyled = styled.section`
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const CartHeader = styled(LoginHeader)`
  margin-top: 5%;
`;
export const CartContainer = styled.div``;

export const CartTotalContainer = styled.div``;

export const CartTotalHeader = styled(GetHelpHeader)`
  margin-top: 3%;
  margin-bottom: 4%;
`;
export const CartTotal = styled(Price)`
  display: block;
`;

export const CartSubTotalCover = styled.div`
  width: 100%;
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const CheckoutButton = styled(MyButton)`
  margin-top: 3%;
  height: 40px;
`;
