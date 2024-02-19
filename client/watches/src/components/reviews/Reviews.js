import { AddToCart } from "../previewItem/PreviewItemStyled";
import { RelatedProductHeader } from "../relatedProducts/RelatedProducts.styled";
import ReviewCard from "./ReviewCard";
import { ReviewCover, ReviewsStyled } from "./Reviews.styled";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import ReviewForm from "./ReviewForm";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const Reviews = ({ itemId }) => {
  const fetchReviews = async () => {
    try {
      const reviews = await getRequest(`${baseUrl}/review/get/${itemId}`);

      return reviews?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching reviews");
    }
  };

  const { data, status } = useQuery("reviews", fetchReviews);
  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  console.log(data);

  return (
    <ReviewsStyled>
      <RelatedProductHeader>Reviews</RelatedProductHeader>
      <AddToCart>Write a review</AddToCart>
      <ReviewForm />
      {status === "loading" ? (
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "20vh" }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        <ReviewCover>
          {data.map((reviews) => {
            return <ReviewCard key={reviews._id} reviews={reviews} />;
          })}
        </ReviewCover>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
