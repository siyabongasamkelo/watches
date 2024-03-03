import styled from "styled-components";

export const SearchStyles = styled.div`
  height: 50px;
  width: 90%;
  border-radius: 30px;
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.light.primary};
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.displayOnMobile ? "block" : "none")};
    width: 100%;
  }
`;

export const SearchBox = styled.input`
  height: 45px;
  width: 65%;
  border: none;
  border-radius: 30px;
  padding-left: 20px;
  &:focus {
    border: none;
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    width: 58%;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;

export const MobileSearchDiv = styled.div`
  width: 100%;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const Icon = styled.button`
  width: 10%;
  border: none;
  border-radius: 30px 30px 30px 30px;
  margin-left: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.light.secondary};
  @media only screen and (max-width: 600px) {
  }
`;

export const CategoriesDropdown = styled.div`
  height: 100%;
  display: flex;
  margin-left: 7%;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 1%;
    margin-left: -2%;
  }
`;

export const Searching = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchingResults = styled.div`
  width: 35%;
  margin-top: 0.5%;
  background-color: white;
  position: absolute;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
