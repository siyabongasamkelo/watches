import Header from "../header/Header";
import {
  ImageHolder,
  ItemCategory,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemQuantity,
  PreviewContainer,
  PreviewParagraph,
  PreviewStyled,
} from "./PreviewItemStyled";
import testImage from "../../assets/images/a1.jpg";
import { MyButton } from "../ProductCard";
import { BagFill } from "react-bootstrap-icons";

const PreviewItem = () => {
  return (
    <PreviewStyled>
      <Header />
      <PreviewContainer>
        <ImageHolder>
          <img src={testImage} alt="item" />
        </ImageHolder>
        <ItemDetails>
          <ItemName>Classic Watch</ItemName>
          <ItemPrice>R 123213.00</ItemPrice>

          <ItemCategory>Classic</ItemCategory>
          <ItemQuantity>
            <PreviewParagraph>Quantity :</PreviewParagraph>
            <MyButton>+</MyButton> 1 <MyButton>-</MyButton>
          </ItemQuantity>
          <div>
            <PreviewParagraph>
              Enhance your look with the limited edition classic golden watch
              from the 19th century designed by siya himself..Enhance your look
              with the limited edition classic golden watch from the 19th
              century designed by siya himself..
            </PreviewParagraph>
          </div>
          <div className=" d-flex justify-content-between">
            <strong>
              <PreviewParagraph>Product total</PreviewParagraph>
            </strong>
            <strong>
              <PreviewParagraph>R 4200.00</PreviewParagraph>
            </strong>
          </div>
          <div className=" d-flex justify-content-between">
            <strong>
              <PreviewParagraph>Product total</PreviewParagraph>
            </strong>
            <strong>
              <PreviewParagraph>R 4200.00</PreviewParagraph>
            </strong>
          </div>
          <MyButton>
            Add to cart <BagFill />
          </MyButton>
        </ItemDetails>
      </PreviewContainer>
    </PreviewStyled>
  );
};

export default PreviewItem;
