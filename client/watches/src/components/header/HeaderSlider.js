import {
  CloseButton,
  Copyrights,
  HeaderSliderSearch,
  HeaderSliderStyled,
  LinksContainer,
} from "./HeaderSlider.styled";
import { X } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderSlider = ({ closeMenu, setCloseMenu, display }) => {
  return (
    <HeaderSliderStyled
      as={motion.div}
      animate={{
        x: -35,
        width: closeMenu ? 0 : 420,
      }}
      transition={{ duration: 0.5 }}
      dis={display}
    >
      <CloseButton>
        <X onClick={setCloseMenu} />
      </CloseButton>
      <LinksContainer onClick={setCloseMenu}>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/contact"}>Contact</Link>
      </LinksContainer>
      <HeaderSliderSearch placeholder="search here" />
      <Copyrights>
        copyright&copy; {new Date().getFullYear()} All rights reserved siyabonga
        Mazibuko
      </Copyrights>
    </HeaderSliderStyled>
  );
};

export default HeaderSlider;
