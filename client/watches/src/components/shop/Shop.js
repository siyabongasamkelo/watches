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

// const successToastMessage = (message) => {
//   toast.success(message);
// };
const Shop = () => {
  const [sliderValues, setSliderValues] = useState([0, 100]); // Initial slider values
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  const fetchItems = async () => {
    try {
      const items = await getRequest(
        `${baseUrl}/item/get?page=${page}&limit=6&search=${search}&sort=${sort}&category=${category}`
      );

      return items.data;
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
          <SearchItem
            placeholder="search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <FilterHeader>Filter by price</FilterHeader>
          <RangeSlider
            min={0}
            max={100}
            values={sliderValues}
            onChange={handleSliderChange}
          />
          <CategoriesHeader>Product categories</CategoriesHeader>
          <CategoriesItem
            onClick={() => {
              setCategory("classic");
            }}
          >
            Classic
          </CategoriesItem>
          <CategoriesItem
            onClick={() => {
              setCategory("advanced");
            }}
          >
            Advanced
          </CategoriesItem>
          <CategoriesItem
            onClick={() => {
              setCategory("minimal");
            }}
          >
            Minimal
          </CategoriesItem>
        </FilterAndSort>
        <ShopItems>
          <SortBy>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Categoies</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="date">Date</option>
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
