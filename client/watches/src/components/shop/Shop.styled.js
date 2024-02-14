import styled from "styled-components";
import { TextBox } from "../header/Header.styled";
import { GetHelpHeader, GetHelpItems } from "../footer/Footer.styled";

export const ShopStyled = styled.section`
  width: 100%;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const ShopContent = styled.div`
  height: 90vh;
  display: flex;
`;

export const FilterAndSort = styled.div`
  height: 100%;
  width: 30%;
  padding: 3%;
`;

export const ShopItems = styled.div`
  background-color: blue;
  height: 100%;
  width: 70%;
`;

export const SearchItem = styled(TextBox)`
  margin-top: 10%;
  width: 100%;
`;

export const FilterHeader = styled(GetHelpHeader)`
  margin-top: 10%;
  text-align: left;
`;

export const CategoriesHeader = styled(FilterHeader)`
  margin-top: 25%;
`;

export const CategoriesItem = styled(GetHelpItems)`
  color: rgba(0, 0, 0, 0.7);
`;
