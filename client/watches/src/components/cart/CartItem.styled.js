import styled from "styled-components";
import { GetHelpItems } from "../footer/Footer.styled";

export const CartItemStyled = styled.div`
  height: 10vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ImageAndName = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    width: 40%;
    height: 50%;
  }
`;
export const Image = styled.div`
  width: 40%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const NameAndCategory = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 10%;
  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;

export const QuantityAndPrice = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;

export const PriceCover = styled.div`
  width: 20%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Price = styled(GetHelpItems)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const QuantityCover = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 35%;
  }
`;

export const Quantity = styled(GetHelpItems)``;

export const ItemTotalCover = styled.div`
  width: 20%;
`;

export const ItemTotal = styled(GetHelpItems)``;

export const DeleteCover = styled.div`
  width: 10%;
  margin-top: -3%;
  svg {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.light.primary};
    }
  }
`;
