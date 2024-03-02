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

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const Reviews = ({ itemId }) => {
  const { user } = useContext(AuthContext);

  const [openReviewForm, setOpenReviewForm] = useState(false);
  const fetchReviews = async () => {
    try {
      const reviews = await getRequest(`${baseUrl}/review/get/${itemId}`);

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

  const queryKey = ["reviews", { itemId }];
  const { data, status, refetch } = useQuery(queryKey, fetchReviews);
  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  useEffect(() => {
    refetch();
  }, [itemId, refetch]);

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
          {data?.map((reviews) => {
            return <ReviewCard key={reviews?._id} reviews={reviews} />;
          })}
        </ReviewCover>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
