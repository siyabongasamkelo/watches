import styled from "styled-components";
import { CartegoryHeader } from "../categories/CartegoryDiv";
import { GetHelpItems } from "../footer/Footer.styled";
import { HeroParagraph } from "../home/Home.styled";
import { MyButton, ProductPrice } from "../ProductCard.styled";

export const PreviewStyled = styled.section`
  width: 100%;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    margin-top: 150px;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 45vh;
  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
    height: 55vh;
    img {
      height: 100%;
      width: 90%;
      object-fit: cover;
    }
  }
`;

export const ItemDetails = styled.div`
  height: 50vh;
  @media only screen and (min-width: 992px) {
    width: 55%;
    height: 50vh;
  }
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

export const PreviewParagraph = styled(HeroParagraph)`
  text-align: left;
`;

export const AddToCart = styled(MyButton)`
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: auto;
  }
`;

export const ReviewsAndRelatedProducts = styled.div`
  margin-top: 80px;
`;
