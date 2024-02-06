import styled from "styled-components";
export const HeaderStyled = styled.header`
  @media only screen and (max-width: 600px) {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    svg {
      transform: scale(1.6);
      fill: rgba(0, 0, 0, 0.8);
    }
  }
  @media only screen and (min-width: 768px) {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    svg {
      transform: scale(1.6);
      fill: rgba(0, 0, 0, 0.8);
    }
  }
  @media only screen and (min-width: 992px) {
    svg {
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        fill: ${(props) => props.theme.light.primary};
      }
    }
  }
`;
export const LogoAndSearch = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 992px) {
    width: 35%;
    svg {
      display: none;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 33%;
    svg {
      display: none;
    }
  }
`;

export const MenuAndCart = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 992px) {
    width: 20%;
  }
  @media only screen and (min-width: 1200px) {
    width: 15%;
  }
`;

export const Logo = styled.h3`
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  img {
    cursor: pointer;
    width: 45px;
  }
`;

export const HeaderLinks = styled.div`
  display: none;
  margin-left: 15%;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.light.smallText};
    padding-left: 15px;
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.light.primary};
    }
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;

export const CartTotal = styled.h4`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
`;

export const TextBox = styled.input`
  height: 50px;
  width: 320px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.light.primary};
  padding-left: 20px;
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
    width: 250px;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
    width: 320px;
  }
`;
