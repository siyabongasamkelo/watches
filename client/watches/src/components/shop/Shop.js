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
import "react-range-slider-input/dist/style.css";
import Slider from "react-slider";
import Form from "react-bootstrap/Form";
import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { baseUrl, currencyFormatter, getRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";
import Pagination from "../Pagination";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const Shop = () => {
  const [values, setValues] = useState([0, 10000]);
  const handleChange = (newValues) => setValues(newValues);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const fetchItems = async () => {
    try {
      const items = await getRequest(
        `${baseUrl}/item/get?page=${page}&limit=6&search=${search}&sort=${sort}&category=${category}&minPrice=${values[0]}&maxPrice=${values[1]}`
      );

      // return items?.data?.items;
      return items?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };

  let minPrice = currencyFormatter.format(values[0]);
  let maxPrice = currencyFormatter.format(values[1]);

  const queryKey = ["items", { sort, category, search, page }];
  const { data, status, refetch } = useQuery(queryKey, fetchItems);

  useEffect(() => {
    refetch();
  }, [sort, category, search, page, refetch, values, setValues]);

  const handlePageChange = (page) => {
    // Fetch paginated data from the server based on the selected page
    // Update the UI with the new data
  };

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

          <Slider
            className="slider"
            value={values}
            onChange={handleChange}
            min={0}
            max={10000}
          />

          <p>min : {minPrice}</p>
          <p>max : {maxPrice}</p>

          <CategoriesHeader>Product categories</CategoriesHeader>
          <CategoriesItem
            onClick={() => {
              setCategory("All");
            }}
          >
            All
          </CategoriesItem>
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
              <option value="createdAt">Date</option>
            </Form.Select>
          </SortBy>
          <ItemContainer>
            {data?.items?.map((item) => (
              <ProductCard image={item?.image} isSpaceSmall={true} />
            ))}
          </ItemContainer>
          <PaginationContainer>
            <Pagination
              totalItems={data?.items?.length}
              itemsPerPage={6}
              onPageChange={data?.page}
            />
          </PaginationContainer>
        </ShopItems>
      </ShopContent>
    </ShopStyled>
  );
};

export default Shop;
