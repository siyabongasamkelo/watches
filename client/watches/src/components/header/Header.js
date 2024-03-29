import {
  CartTotal,
  HeaderLinks,
  HeaderStyled,
  Logo,
  LogoAndSearch,
  MenuAndCart,
} from "./Header.styled";
import { Container } from "react-bootstrap";
import { List, BagFill } from "react-bootstrap-icons";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import HeaderSlider from "./HeaderSlider";
import { CartContext } from "../../context/CartContext";
import { currencyFormatter } from "../../utils/Services";
import Search from "./Search";
import { MobileSearchDiv } from "./Search.styles";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { total } = useContext(CartContext);
  const Total = currencyFormatter.format(total);

  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");
  const { user, logOut } = useContext(AuthContext);

  return (
    <Container>
      <HeaderStyled>
        <LogoAndSearch>
          <Link to="/">
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Link>
          <Search displayOnMobile={false} />
        </LogoAndSearch>
        <HeaderLinks>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          {user ? (
            <Link to={"/"} onClick={logOut}>
              Logout
            </Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
          <Link to={"/account"}>Contact</Link>
        </HeaderLinks>
        <MenuAndCart>
          {total > 0 ? <CartTotal>{Total}</CartTotal> : <div></div>}

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
      <MobileSearchDiv>
        <Search displayOnMobile={true} />
      </MobileSearchDiv>
    </Container>
  );
};

export default Header;
