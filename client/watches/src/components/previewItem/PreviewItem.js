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
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { baseUrl, currencyFormatter, getRequest } from "../../utils/Services";

const PreviewItem = () => {
  let { itemId } = useParams();

  const getItem = async () => {
    const item = await getRequest(`${baseUrl}/item/get/${itemId}`);
    return item.data;
  };

  const queryKey = ["item", { itemId }];
  const { data, status, refetch } = useQuery(queryKey, getItem);
  const formattedAmount = currencyFormatter.format(data?.price);
  console.log(data);

  return (
    <PreviewStyled>
      <Header />
      <PreviewContainer>
        <ImageHolder>
          <img src={data?.image} alt="item" />
        </ImageHolder>
        <ItemDetails>
          <ItemName>{data?.name}</ItemName>
          <ItemPrice>{formattedAmount}</ItemPrice>

          <ItemCategory>{data?.category}</ItemCategory>
          <ItemQuantity>
            <PreviewParagraph>Quantity :</PreviewParagraph>
            <MyButton>+</MyButton> 1 <MyButton>-</MyButton>
          </ItemQuantity>
          <div>
            <PreviewParagraph>{data?.description}</PreviewParagraph>
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
