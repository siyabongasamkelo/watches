import styled from "styled-components";
import { TextBox } from "../header/Header.styled";
import { GetHelpHeader, GetHelpItems } from "../footer/Footer.styled";

export const ShopStyled = styled.section`
  width: 100%;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const ShopContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const FilterAndSort = styled.div`
  height: 100%;
  padding: 3%;
  width: 100%;

  /* style for the stupid slider thing */

  /* Styles for the slider component */
  .slider {
    height: 10px;
    width: 100%;
    background-color: #ddd;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  /* Styles for the slider thumb */
  .slider .thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #007bff;
    cursor: grab;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  /* Styles for the slider active state */
  .slider .thumb.active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const ShopItems = styled.div`
  height: 100%;
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

export const SearchItem = styled(TextBox)`
  width: 100%;
  display: block;
  margin-top: 5%;
  @media only screen and (min-width: 992px) {
    margin-top: 20%;
  }
`;

export const FilterHeader = styled(GetHelpHeader)`
  margin-top: 10%;
  text-align: left;
  margin-top: 10%;
`;

export const CategoriesHeader = styled(FilterHeader)`
  margin-top: 10%;
  margin-bottom: 5%;
  @media only screen and (min-width: 992px) {
    margin-top: 25%;
  }
`;

export const CategoriesItem = styled(GetHelpItems)`
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.light.primary};
  }
`;

export const SortBy = styled.div`
  width: 90%;
  margin-left: 4%;

  @media only screen and (min-width: 992px) {
    margin-left: 80%;
    width: 20%;
  }
`;

export const ItemContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
`;

export const PaginationContainer = styled.div`
  height: 5vh;
  background-color: red;
  margin-top: 8%;
  @media only screen and (max-width: 600px) {
    margin-top: 10%;
  }
`;
