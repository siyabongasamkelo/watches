import styled from "styled-components";
export const CartegoryDivsStyled = styled.div`
  height: 28%;
  width: 85%;
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    height: 85%;
    width: 30%;
  }
`;

export const CartegoryImage = styled.div`
  height: 75%;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  @media only screen and (min-width: 768px) {
    height: 85%;
  }
  @media only screen and (min-width: 992px) {
    height: 75%;
  }
  @media only screen and (min-width: 1200px) {
    height: 75%;
  }
`;

export const CartegoryHeader = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 20px;
  padding-top: 10px;
  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 24px;
    padding-top: 20px;
  }
`;

export const CartegoryParagraph = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

const CartegoryDiv = ({ image, name, description }) => {
  return (
    <CartegoryDivsStyled>
      <CartegoryImage image={image}></CartegoryImage>
      <CartegoryHeader>{name}</CartegoryHeader>
      <CartegoryParagraph>{description}</CartegoryParagraph>
    </CartegoryDivsStyled>
  );
};

export default CartegoryDiv;
