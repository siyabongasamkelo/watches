import {
  CartTotal,
  HeaderLinks,
  HeaderStyled,
  Logo,
  LogoAndSearch,
  MenuAndCart,
  TextBox,
} from "./Header.styled";
import { Container } from "react-bootstrap";
import { Search, List, BagFill } from "react-bootstrap-icons";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

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
          <TextBox />
        </LogoAndSearch>
        <HeaderLinks>
          <Link to={"/home"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/account"}>Contact</Link>
        </HeaderLinks>
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
