import Header from "../header/Header";
import {
  AddToCart,
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
import { MyButton } from "../ProductCard";
import { BagFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { baseUrl, currencyFormatter, getRequest } from "../../utils/Services";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const PreviewItem = () => {
  let { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const getItem = async () => {
    const item = await getRequest(`${baseUrl}/item/get/${itemId}`);
    return item.data;
  };

  const queryKey = ["item", { itemId }];
  const { data, status, refetch } = useQuery(queryKey, getItem);
  const formattedAmount = currencyFormatter.format(data?.price);

  const incrementQuantity = (operator) => {
    if (operator === "subtract" && quantity === 1) return;
    if (operator === "add" && quantity === 20) return;

    operator === "add"
      ? setQuantity((prevQuantity) => prevQuantity + 1)
      : setQuantity((prevQuantity) => prevQuantity - 1);
  };

  useEffect(() => {
    let totalCost = data?.price * quantity;
    const formatedCost = currencyFormatter.format(totalCost);
    setTotal(formatedCost);
  }, [quantity, total, data?.price]);

  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  return (
    <PreviewStyled>
      <Header />
      <ToastContainer />
      {status === "loading" ? (
        <div
          style={{ height: "70vh" }}
          className=" d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" />
        </div>
      ) : (
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

              <MyButton
                style={{ marginLeft: "10px", marginRight: "10px" }}
                onClick={() => incrementQuantity("subtract")}
              >
                -
              </MyButton>
              {quantity}
              <MyButton
                style={{ marginLeft: "10px", marginRight: "10px" }}
                onClick={() => incrementQuantity("add")}
              >
                +
              </MyButton>
            </ItemQuantity>
            <div>
              <PreviewParagraph>{data?.description}</PreviewParagraph>
            </div>
            <div className=" d-flex justify-content-between">
              <strong>
                <PreviewParagraph>Product total</PreviewParagraph>
              </strong>
              <strong>
                <PreviewParagraph>{total}</PreviewParagraph>
              </strong>
            </div>
            <div className=" d-flex justify-content-between">
              <strong>
                <PreviewParagraph>Grand total</PreviewParagraph>
              </strong>
              <strong>
                <PreviewParagraph>{total}</PreviewParagraph>
              </strong>
            </div>
            <AddToCart>
              Add to cart <BagFill />
            </AddToCart>
          </ItemDetails>
        </PreviewContainer>
      )}
    </PreviewStyled>
  );
};

export default PreviewItem;
