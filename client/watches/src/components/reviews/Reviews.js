import { AddToCart } from "../previewItem/PreviewItemStyled";
import { RelatedProductHeader } from "../relatedProducts/RelatedProducts.styled";
import ReviewCard from "./ReviewCard";
import { ReviewCover, ReviewsStyled } from "./Reviews.styled";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

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

  return (
    <ReviewsStyled>
      <RelatedProductHeader>Reviews</RelatedProductHeader>
      <AddToCart>Write a review</AddToCart>
      <ReviewCover>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ReviewCover>
    </ReviewsStyled>
  );
};

export default Reviews;
