import {
  CartTotal,
  HeaderStyled,
  Logo,
  LogoAndSearch,
  MenuAndCart,
} from "./Header.styled";
import { Container } from "react-bootstrap";
import { Search, List, BagFill } from "react-bootstrap-icons";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <LogoAndSearch>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Search
            style={{
              marginRight: "30px",
            }}
          />
        </LogoAndSearch>
        <MenuAndCart>
          <CartTotal>R 4000.00</CartTotal>
          <BagFill />
          <List />
        </MenuAndCart>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
