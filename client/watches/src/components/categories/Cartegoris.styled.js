import styled from "styled-components";

export const CategoriesStyled = styled.section`
  background-color: ${(props) => props.theme.light.tetiary};
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 100vh;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    height: 45vh;
    flex-direction: row;
  }
  /* @media only screen and (min-width: 1200px) {
    height: 45vh;
    flex-direction: row;
  } */
`;
