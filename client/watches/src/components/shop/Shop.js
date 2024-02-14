import Header from "../header/Header";
import {
  CategoriesHeader,
  CategoriesItem,
  FilterAndSort,
  FilterHeader,
  SearchItem,
  ShopContent,
  ShopItems,
  ShopStyled,
} from "./Shop.styled";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Shop = () => {
  return (
    <ShopStyled>
      <Header />
      <ShopContent>
        <FilterAndSort>
          <SearchItem placeholder="search..." />
          <FilterHeader>Filter by price</FilterHeader>
          <RangeSlider />
          <CategoriesHeader>Product categories</CategoriesHeader>
          <CategoriesItem>Classic</CategoriesItem>
          <CategoriesItem>Advanced</CategoriesItem>
          <CategoriesItem>Minimal</CategoriesItem>
        </FilterAndSort>
        <ShopItems></ShopItems>
      </ShopContent>
    </ShopStyled>
  );
};

export default Shop;
