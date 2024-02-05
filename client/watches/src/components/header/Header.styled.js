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
`;
export const LogoAndSearch = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

export const Logo = styled.h3`
  @media only screen and (max-width: 600px) {
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
  }
`;

export const CartTotal = styled.h4`
  @media only screen and (max-width: 600px) {
    /* color: #f28585; */
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
  }
`;
