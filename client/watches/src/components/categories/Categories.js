import { CartegoryDivs, CategoriesStyled } from "./Cartegoris.styled";
import hero2 from "../../assets/images/hero2.jpg";
import { Container } from "react-bootstrap";
import CartegoryDiv from "./CartegoryDiv";

const Categories = () => {
  return (
    <Container>
      <CategoriesStyled>
        <CartegoryDiv image={hero2} />
        <CartegoryDiv image={hero2} />
        <CartegoryDiv image={hero2} />
      </CategoriesStyled>
    </Container>
  );
};

export default Categories;
