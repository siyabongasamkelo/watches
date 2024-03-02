import styled from "styled-components";

export const ProductCardStyled = styled.div`
  height: 35vh;
  width: 43%;
  margin-left: 4%;
  margin-top: 10%;
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    height: 40vh;
    width: ${(props) => (props.isSpaceSmall ? "28%" : "20%")};
    margin-top: ${(props) => (props.isSpaceSmall ? "7%" : "4%")};
  }
`;

export const ProductImage = styled.div`
  height: 60%;
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
  text-align: left;
  margin-top: 10px;
  font-size: 13px;
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
  font-size: 18px;
  margin-top: -10px;
  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 20px;
  }
`;

export const ProductPrice = styled.h3`
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
  font-size: 13px;

  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const ProductRating = styled.h4`
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  font-size: 14px;
  @media only screen and (min-width: 1200px) {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const MyButton = styled.button`
  height: 25px;
  background-color: ${(props) => props.theme.light.secondary};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.light.secondary};
  transition: 0.5s ease-in-out;
  font-size: 12px;
  &:hover {
    color: ${(props) => props.theme.light.primary};
  }
  @media only screen and (min-width: 992px) {
    font-size: 15px;
    height: 32px;
  }
`;
