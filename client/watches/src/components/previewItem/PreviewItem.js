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
  ReviewsAndRelatedProducts,
} from "./PreviewItemStyled";
import { MyButton } from "../ProductCard.styled";
import { BagFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { baseUrl, currencyFormatter, getRequest } from "../../utils/Services";
import { useContext, useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RelatedProducts from "../relatedProducts/RelatedProducts";
import Reviews from "../reviews/Reviews";
import { CartContext } from "../../context/CartContext";
import Header from "../header/Header";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};

const PreviewItem = () => {
  const reviewSectionRef = useRef(null);
  const headerRef = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const { addItemToCart } = useContext(CartContext);

  //fetching the item
  let { itemId } = useParams();
  let { scrollTo } = useParams();

  console.log("scroll to on preview", scrollTo);
  const getItem = async () => {
    const item = await getRequest(`${baseUrl}/item/get/${itemId}`);
    return item?.data;
  };

  const queryKey = ["item", { itemId }];
  const { data, status } = useQuery(queryKey, getItem);
  const formattedAmount = currencyFormatter.format(data?.price);

  //incrementing and decrementing quantity
  const incrementQuantity = (operator) => {
    if (operator === "subtract" && quantity === 1) return;
    if (operator === "add" && quantity === 20) return;

    operator === "add"
      ? setQuantity((prevQuantity) => prevQuantity + 1)
      : setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addThisItemToCart = (data) => {
    const newItem = { ...data, quantity };
    addItemToCart(newItem);
    successToastMessage("Item added to cart");
  };

  //calculating total
  useEffect(() => {
    let totalCost = data?.price * quantity;
    const formatedCost = currencyFormatter.format(totalCost);
    setTotal(formatedCost);
  }, [quantity, total, data?.price]);

  useEffect(() => {
    scrollTo === "reviews" &&
      reviewSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
    scrollTo === "none" &&
      headerRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollTo]);

  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  return (
    <PreviewStyled>
      <div ref={headerRef}>
        <Header />
      </div>
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
            <AddToCart
              onClick={() => {
                addThisItemToCart(data);
              }}
            >
              Add to cart <BagFill />
            </AddToCart>
          </ItemDetails>
        </PreviewContainer>
      )}
      <ReviewsAndRelatedProducts>
        <Tabs
          defaultActiveKey="reviews"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="related-items" title="related products">
            <RelatedProducts />
          </Tab>
          <Tab eventKey="reviews" title="reviews">
            <div ref={reviewSectionRef}>
              <Reviews itemId={itemId} />
            </div>
          </Tab>
        </Tabs>
      </ReviewsAndRelatedProducts>
    </PreviewStyled>
  );
};

export default PreviewItem;
