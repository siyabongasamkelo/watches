import {
  CartItemStyled,
  DeleteCover,
  Image,
  ImageAndName,
  ItemTotal,
  ItemTotalCover,
  NameAndCategory,
  Price,
  PriceCover,
  QuantityAndPrice,
  QuantityCover,
} from "./CartItem.styled";
import { MyButton, ProductPrice } from "../ProductCard.styled";
import { Trash } from "react-bootstrap-icons";
import { HeroParagraph } from "../home/Home.styled";
import { currencyFormatter } from "../../utils/Services";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { increaseQuamtity, decreaseQuamtity, removeItemFromCart } =
    useContext(CartContext);

  const formattedPrice = currencyFormatter.format(item?.quantity * item?.price);
  const shippingCost = 200;
  const formattedTotal = currencyFormatter.format(
    item?.quantity * item?.price + shippingCost
  );

  return (
    <CartItemStyled>
      <ImageAndName>
        <Image>
          <img src={item?.image} alt="item" />
        </Image>
        <NameAndCategory>
          <ProductPrice>
            <strong>{item?.name}</strong>
          </ProductPrice>
          <ProductPrice>{item?.category}</ProductPrice>
        </NameAndCategory>
      </ImageAndName>
      <QuantityAndPrice>
        <PriceCover>
          <Price>{formattedPrice}</Price>
        </PriceCover>
        <QuantityCover>
          <MyButton
            onClick={() => {
              decreaseQuamtity(item?._id);
            }}
          >
            -
          </MyButton>
          <HeroParagraph>{item?.quantity}</HeroParagraph>
          <MyButton
            onClick={() => {
              increaseQuamtity(item?._id);
            }}
          >
            +
          </MyButton>
        </QuantityCover>
        <ItemTotalCover>
          <ItemTotal>{formattedTotal}</ItemTotal>
        </ItemTotalCover>
        <DeleteCover>
          <Trash onClick={() => removeItemFromCart(item?._id)} />
        </DeleteCover>
      </QuantityAndPrice>
    </CartItemStyled>
  );
};

export default CartItem;
