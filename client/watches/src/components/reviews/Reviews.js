import { AddToCart } from "../previewItem/PreviewItemStyled";
import { RelatedProductHeader } from "../relatedProducts/RelatedProducts.styled";
import ReviewCard from "./ReviewCard";
import { ReviewCover, ReviewsStyled } from "./Reviews.styled";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import ReviewForm from "./ReviewForm";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  CategoriesHeader,
  CategoriesItem,
  FilterAndSort,
  ShopItems,
  SortBy,
} from "../shop/Shop.styled";
import { StarFill, Star } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i}>
          <StarFill style={{ fill: "gold" }} />
        </span>
      ); // Full star
    } else {
      stars.push(
        <span key={i}>
          <Star />
        </span>
      ); // Empty star
    }
  }

  return <div>{stars}</div>;
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

const Reviews = ({ itemId }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(null);

  const { user } = useContext(AuthContext);

  const [openReviewForm, setOpenReviewForm] = useState(false);
  const fetchReviews = async () => {
    try {
      const reviews = await getRequest(
        `${baseUrl}/review/get?itemId=${itemId}&page=${page}&search=${search}&sort=${sort}&rating=${rating}`
      );

      return reviews?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching reviews");
    }
  };

  const openForm = () => {
    if (user) {
      setOpenReviewForm(true);
    } else {
      showToastErrorMessage("please login to write a review");
    }
  };

  const queryKey = ["reviews", { itemId, page, search, sort, rating }];
  const { data, status, refetch } = useQuery(queryKey, fetchReviews);
  console.log("reviews", data);

  const averageRating = calculateAverageRating(data);

  if (status === "error")
    showToastErrorMessage("there was a problem while fetching reviews");

  useEffect(() => {
    refetch();
  }, [itemId, page, search, sort, rating, refetch]);

  return (
    <ReviewsStyled>
      <RelatedProductHeader>Reviews</RelatedProductHeader>
      <AddToCart onClick={openForm}>Write a review</AddToCart>
      {openReviewForm && (
        <ReviewForm
          closeForm={() => setOpenReviewForm(false)}
          itemId={itemId}
        />
      )}

      {status === "loading" ? (
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "20vh" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <ReviewCover>
          <FilterAndSort>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1>{averageRating.toFixed(1)}</h1>{" "}
              <StarRating rating={averageRating} />
              <p style={{ padding: "15px 0 0 20px" }}>
                ({data?.length}) Total reviews
              </p>
            </div>
            <CategoriesHeader>Filter by star ratings </CategoriesHeader>
            <CategoriesItem onClick={() => setRating(null)}>
              Get all reviews
            </CategoriesItem>
            <CategoriesItem onClick={() => setRating(1)}>
              <StarRating rating={1} />
            </CategoriesItem>
            <CategoriesItem onClick={() => setRating(2)}>
              <StarRating rating={2} />
            </CategoriesItem>
            <CategoriesItem onClick={() => setRating(3)}>
              <StarRating rating={3} />
            </CategoriesItem>
            <CategoriesItem onClick={() => setRating(4)}>
              <StarRating rating={4} />
            </CategoriesItem>
            <CategoriesItem onClick={() => setRating(5)}>
              <StarRating rating={5} />
            </CategoriesItem>
          </FilterAndSort>
          <ShopItems>
            <SortBy>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSort(e.target.value)}
              >
                <option>Sort by rating</option>
                <option value={1}>Lowest rating to Highest</option>
                <option value={-1}>Highest rating to Lowest</option>
              </Form.Select>
            </SortBy>

            {data?.map((reviews) => {
              return <ReviewCard key={reviews?._id} reviews={reviews} />;
            })}
          </ShopItems>
        </ReviewCover>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
