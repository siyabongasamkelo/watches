import styled from "styled-components";

export const PopularProductsStyled = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const PopularProductsHeader = styled.h3`
  margin-top: 100px;
  color: ${(props) => props.theme.light.primary};
  text-align: center;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;
