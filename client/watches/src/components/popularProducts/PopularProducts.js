import ProductCard from "../ProductCard";
import {
  PopularProductsHeader,
  PopularProductsStyled,
} from "./PopularProducts.styled";
import { Container } from "react-bootstrap";
import advanced from "../../assets/images/a1.jpg";
import classic from "../../assets/images/c1.jpg";
import minimalist from "../../assets/images/m1.jpg";
import minimalist2 from "../../assets/images/m2.jpg";

const PopularProducts = () => {
  return (
    <Container>
      <div>
        <PopularProductsHeader>Popular Products</PopularProductsHeader>
      </div>
      <PopularProductsStyled>
        <ProductCard image={advanced} />
        <ProductCard image={classic} />
        <ProductCard image={minimalist} />
        <ProductCard image={minimalist2} />
        <ProductCard image={advanced} />
        <ProductCard image={classic} />
        <ProductCard image={minimalist} />
        <ProductCard image={minimalist2} />
      </PopularProductsStyled>
    </Container>
  );
};

export default PopularProducts;
