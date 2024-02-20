import {
  CartItemStyled,
  Delete,
  DeleteCover,
  Image,
  ImageAndName,
  ItemTotal,
  ItemTotalCover,
  NameAndCategory,
  Price,
  PriceCover,
  Quantity,
  QuantityAndPrice,
  QuantityCover,
} from "./CartItem.styled";
import item from "../../assets/images/a4.jpg";
import { MyButton, ProductPrice } from "../ProductCard";
import { Trash } from "react-bootstrap-icons";
import { HeroParagraph } from "../home/Home.styled";

const CartItem = () => {
  return (
    <CartItemStyled>
      <ImageAndName>
        <Image>
          <img src={item} alt="item" />
        </Image>
        <NameAndCategory>
          <ProductPrice>
            <strong>Oridnary 336</strong>
          </ProductPrice>
          <ProductPrice>Classic</ProductPrice>
        </NameAndCategory>
      </ImageAndName>
      <QuantityAndPrice>
        <PriceCover>
          <Price>R 4000.00</Price>
        </PriceCover>
        <QuantityCover>
          <MyButton>-</MyButton>
          <HeroParagraph>9</HeroParagraph>
          <MyButton>+</MyButton>
        </QuantityCover>
        <ItemTotalCover>
          <ItemTotal>R 4000.00</ItemTotal>
        </ItemTotalCover>
        <DeleteCover>
          <Trash />
        </DeleteCover>
      </QuantityAndPrice>
    </CartItemStyled>
  );
};

export default CartItem;
