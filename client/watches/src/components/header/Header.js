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
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";

const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");
  return (
    <Container>
      <HeaderStyled>
        <LogoAndSearch>
          <Link to="/">
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Link>
          <Search
            style={{
              marginRight: "30px",
            }}
          />
          <TextBox placeholder="search here..." />
        </LogoAndSearch>
        <HeaderLinks>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/account"}>Contact</Link>
        </HeaderLinks>
        <MenuAndCart>
          <CartTotal>R 4000.00</CartTotal>
          <Link to={"/cart"}>
            <BagFill />
          </Link>
          {/* menu button that opens the header slider */}
          <List
            onClick={() => {
              closeMenu ? setDisplay("none") : setDisplay("block");
              setCloseMenu(false);
            }}
          />
        </MenuAndCart>
        {/* Header slider that slides in when you click menu */}
        {/* !!!!!! */}

        <HeaderSlider
          setCloseMenu={() => {
            setCloseMenu(true);
          }}
          closeMenu={closeMenu}
          display={display}
        ></HeaderSlider>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
