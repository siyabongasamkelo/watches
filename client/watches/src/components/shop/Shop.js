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
import { useState } from "react";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};
const Shop = () => {
  const [sliderValues, setSliderValues] = useState([0, 100]); // Initial slider values

  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  const fetchItems = async () => {
    try {
      const items = await getRequest(`${baseUrl}/item/get`);

      return items.data.json();
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };

  const { data, status } = useQuery("items", fetchItems);
  console.log(data);
  return (
    <ShopStyled>
      <Header />
      <ToastContainer />
      <ShopContent>
        <FilterAndSort>
          <SearchItem placeholder="search..." />
          <FilterHeader>Filter by price</FilterHeader>
          <RangeSlider
            min={0}
            max={100}
            values={sliderValues}
            onChange={handleSliderChange}
          />
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
            <ProductCard image={advanced} isSpaceSmall={true} />
            <ProductCard image={classic} isSpaceSmall={true} />
            <ProductCard image={minimalist} isSpaceSmall={true} />
            <ProductCard image={minimalist2} isSpaceSmall={true} />
            <ProductCard image={advanced} isSpaceSmall={true} />
            <ProductCard image={classic} isSpaceSmall={true} />
          </ItemContainer>
          <PaginationContainer></PaginationContainer>
        </ShopItems>
      </ShopContent>
    </ShopStyled>
  );
};

export default Shop;
