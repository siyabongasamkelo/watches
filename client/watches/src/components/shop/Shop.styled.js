import styled from "styled-components";
import { TextBox } from "../header/Header.styled";

export const ShopStyled = styled.section`
  width: 100%;
`;

export const ShopContent = styled.div`
  height: 90vh;
  display: flex;
`;

export const FilterAndSort = styled.div`
  height: 100%;
  width: 30%;
  background-color: red;
`;

export const ShopItems = styled.div`
  background-color: blue;
  height: 100%;
  width: 70%;
`;

export const SearchItem = styled(TextBox)``;
