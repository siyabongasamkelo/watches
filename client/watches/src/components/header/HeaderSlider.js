import {
  CloseButton,
  Copyrights,
  HeaderSliderItems,
  HeaderSliderSearch,
  HeaderSliderStyled,
} from "./HeaderSlider.styled";
import { X } from "react-bootstrap-icons";
import { motion } from "framer-motion";

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
      <HeaderSliderItems>Home</HeaderSliderItems>
      <HeaderSliderItems>Shop</HeaderSliderItems>
      <HeaderSliderItems>Login</HeaderSliderItems>
      <HeaderSliderItems>Contact</HeaderSliderItems>
      <HeaderSliderSearch placeholder="search here" />
      <Copyrights>
        copyright&copy; {new Date().getFullYear()} All rights reserved siyabonga
        Mazibuko
      </Copyrights>
    </HeaderSliderStyled>
  );
};

export default HeaderSlider;
