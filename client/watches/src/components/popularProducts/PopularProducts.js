import ProductCard from "../ProductCard";
import {
  PopularProductsHeader,
  PopularProductsStyled,
} from "./PopularProducts.styled";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const PopularProducts = () => {
  const fetchItems = async () => {
    try {
      const items = await getRequest(`${baseUrl}/item/get?limit=12`);

      return items?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };

  const { data, status } = useQuery("items", fetchItems);

  return (
    <Container>
      <div>
        <PopularProductsHeader>Popular Products</PopularProductsHeader>
      </div>
      {status === "loading" ? (
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <PopularProductsStyled>
          {data?.items?.map((item) => {
            return <ProductCard key={item?._id} item={item} />;
          })}
        </PopularProductsStyled>
      )}
    </Container>
  );
};

export default PopularProducts;
