import Header from "../header/Header";
import {
  CategoriesHeader,
  CategoriesItem,
  FilterAndSort,
  FilterHeader,
  ItemContainer,
  PaginationContainer,
  SearchItem,
  ShopContent,
  ShopItems,
  ShopStyled,
  SortBy,
} from "./Shop.styled";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Form from "react-bootstrap/Form";
import ProductCard from "../ProductCard";
import classic from "../../assets/images/c1.jpg";
import minimalist from "../../assets/images/m1.jpg";
import minimalist2 from "../../assets/images/m2.jpg";
import advanced from "../../assets/images/a1.jpg";

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
        <ShopItems>
          <SortBy>
            <Form.Select aria-label="Default select example">
              <option>Categoies</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </SortBy>
          <ItemContainer>
            <ProductCard image={advanced} />
            <ProductCard image={classic} />
            <ProductCard image={minimalist} />
            <ProductCard image={minimalist2} />
            <ProductCard image={advanced} />
            <ProductCard image={classic} />
          </ItemContainer>
          <PaginationContainer></PaginationContainer>
        </ShopItems>
      </ShopContent>
    </ShopStyled>
  );
};

export default Shop;
