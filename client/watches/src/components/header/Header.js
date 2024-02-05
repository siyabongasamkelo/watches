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
              //   transform: "scale(1.3)"
            }}
          />
        </LogoAndSearch>
        <MenuAndCart>
          <CartTotal>R 4000.00</CartTotal>
          <BagFill
          // style={{ transform: "scale(1.3)" }}
          />
          <List
          // style={{ transform: "scale(1.4)" }}
          />
        </MenuAndCart>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
