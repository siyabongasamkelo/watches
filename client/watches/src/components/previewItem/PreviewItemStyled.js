import styled from "styled-components";
import { CartegoryHeader } from "../categories/CartegoryDiv";
import { GetHelpItems } from "../footer/Footer.styled";
import { HeroParagraph } from "../home/Home.styled";
import { ProductPrice } from "../ProductCard";

export const PreviewStyled = styled.section`
  width: 100%;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const PreviewContainer = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const ImageHolder = styled.div`
  width: 50%;
  height: 90vh;
  img {
    height: 65%;
    width: 90%;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  width: 50%;
  height: 90vh;
`;

export const ItemName = styled(CartegoryHeader)`
  color: rgba(0, 0, 0, 0.7);
`;

export const ItemPrice = styled(ProductPrice)`
  padding-top: 20px;
`;

export const ItemCategory = styled(GetHelpItems)`
  padding-top: 20px;
`;

export const ItemQuantity = styled.div`
  display: flex;
`;

export const PreviewParagraph = styled(HeroParagraph)``;
