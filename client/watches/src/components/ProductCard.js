import styled from "styled-components";

export const ProductCardStyled = styled.div`
  height: 40vh;
  width: 20%;
  margin-left: 4%;
  margin-top: 3%;
`;
export const ProductImage = styled.div`
  height: 70%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;
export const ProductCategory = styled.p`
  color: ${(props) => props.theme.light.smallText};
  text-align: center;
  @media only screen and (min-width: 992px) {
    text-align: left;
    font-size: 17px;
  }
  @media only screen and (min-width: 1200px) {
    text-align: left;
    font-size: 14px;
    padding-top: 10px;
  }
`;

export const ProductName = styled.h3`
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  font-size: 20px;
  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const ProductPrice = styled.h3`
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  font-size: 16px;
  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 16px;
  }
`;

const ProductCard = ({ image }) => {
  return (
    <ProductCardStyled>
      <ProductImage>
        <img src={image} alt="product" />
      </ProductImage>
      <ProductCategory>Luxurious Watches</ProductCategory>
      <ProductName>Classic Watches</ProductName>
      <ProductPrice>$100</ProductPrice>
    </ProductCardStyled>
  );
};

export default ProductCard;
