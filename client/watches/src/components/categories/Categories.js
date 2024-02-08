import { CategoriesStyled } from "./Cartegoris.styled";
import hero2 from "../../assets/images/hero2.jpg";
import { Container } from "react-bootstrap";
import CartegoryDiv from "./CartegoryDiv";
import styled from "styled-components";
import { PopularProductsHeader } from "../popularProducts/PopularProducts.styled";
import advanced from "../../assets/images/a1.jpg";
import classic from "../../assets/images/c1.jpg";
import minimalist from "../../assets/images/m1.jpg";

export const CategoriesHeader = styled(PopularProductsHeader)`
  margin-bottom: 60px;
`;

const Categories = () => {
  return (
    <Container>
      <div>
        <CategoriesHeader>Our Cartegories</CategoriesHeader>
      </div>
      <CategoriesStyled>
        <CartegoryDiv
          image={classic}
          name={"Classic Watches"}
          description={
            "Old golden classic watches from the 18th century designed by the great Italian Designer"
          }
        />
        <CartegoryDiv
          image={advanced}
          name={"Advanced Technology"}
          description={
            "Modern looking watches with advanced cutting edge technology on you wrists"
          }
        />
        <CartegoryDiv
          image={minimalist}
          name={"Minimalist Watches"}
          description={
            "Simple but elegant designs made for peaple who like minimalism"
          }
        />
      </CategoriesStyled>
    </Container>
  );
};

export default Categories;
