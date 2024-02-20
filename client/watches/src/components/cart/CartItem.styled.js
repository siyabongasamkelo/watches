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
`;

export const QuantityAndPrice = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceCover = styled.div`
  width: 20%;
`;

export const Price = styled(GetHelpItems)``;

export const QuantityCover = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled(Price)``;

export const ItemTotalCover = styled.div`
  width: 20%;
`;

export const ItemTotal = styled(Price)``;

export const DeleteCover = styled.div`
  width: 10%;
  margin-top: -3%;
  svg {
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.light.secondary};
    }
  }
`;
