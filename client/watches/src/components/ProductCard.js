import { Stack } from "react-bootstrap";
import { BagFill, StarFill } from "react-bootstrap-icons";
import { baseUrl, currencyFormatter, getRequest } from "../utils/Services";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import {
  MyButton,
  ProductCardStyled,
  ProductCategory,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductRating,
} from "./ProductCard.styled";

const successToastMessage = (message) => {
  toast.success(message);
};

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return 0; // Return 0 if there are no reviews
  }

  const totalRating = reviews.reduce(
    (accumulator, review) => accumulator + review?.rating,
    0
  );
  const averageRating = totalRating / reviews.length;
  return averageRating;
};

const ProductCard = ({ item, isSpaceSmall }) => {
  const { addItemToCart } = useContext(CartContext);

  const scrollToReviews = "reviews";
  const scrollToNone = "none";

  const fetchReviews = async () => {
    try {
      const reviews = await getRequest(`${baseUrl}/review/get/${item?._id}`);

      const averageRating = calculateAverageRating(reviews?.data);

      return { averageRating, totalReviews: reviews?.data?.length };
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };
  const queryKey = ["reviews", { item }];
  const { data, refetch } = useQuery(queryKey, fetchReviews);

  useEffect(() => {
    refetch();
  }, [item, refetch]);

  const addTheItemToCart = () => {
    const newItem = { ...item, quantity: 1 };
    addItemToCart(newItem);
    successToastMessage("Item added to cart");
  };

  const navigate = useNavigate();
  const goToPreviewItem = () => {
    navigate(`/shop/${item?._id}/${scrollToNone}`);
  };
  const formattedAmount = currencyFormatter.format(item?.price);

  return (
    <ProductCardStyled isSpaceSmall={isSpaceSmall}>
      <ProductImage
        onClick={() => {
          goToPreviewItem();
        }}
      >
        <img src={item?.image} alt="product" />
      </ProductImage>
      <ProductCategory>{item?.category}</ProductCategory>
      <ProductName>{item?.name}</ProductName>
      <Stack
        direction="horizontal"
        className=" d-flex justify-content-between align-items-center"
      >
        <ProductRating>
          {data?.averageRating}
          <Link to={`/shop/${item?._id}/${scrollToReviews}`}>
            <StarFill style={{ margin: "0 5px 0 5px", fill: "gold" }} />
            {data?.totalReviews} total reviews
          </Link>
        </ProductRating>

        <ProductCategory>in stock</ProductCategory>
      </Stack>

      <Stack
        direction="horizontal"
        className=" d-flex justify-content-between align-items-center"
      >
        <ProductPrice>{formattedAmount}</ProductPrice>
        <MyButton onClick={() => addTheItemToCart(item?._id)}>
          add to cart
          <BagFill style={{ marginLeft: "10px" }} />
        </MyButton>
      </Stack>
    </ProductCardStyled>
  );
};

export default ProductCard;
