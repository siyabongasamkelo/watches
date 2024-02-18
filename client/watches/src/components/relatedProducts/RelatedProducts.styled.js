import styled from "styled-components";
import { PopularProductsHeader } from "../popularProducts/PopularProducts.styled";

export const RelatedProductStyled = styled.div``;

export const RelatedProductHeader = styled(PopularProductsHeader)`
  margin-top: 30px;
`;

export const RelatedProductCover = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
