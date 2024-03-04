import {
  Profile,
  Review,
  ReviewCardStyles,
  ReviewText,
} from "./ReviewCard.styled";
import propic from "../../assets/images/propic5.jpg";
import { PreviewParagraph } from "../previewItem/PreviewItemStyled";
import { StarFill, Star } from "react-bootstrap-icons";

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

  return <div style={{ marginTop: "-30px", marginLeft: "-12px" }}>{stars}</div>;
};

const ReviewCard = ({ reviews }) => {
  return (
    <ReviewCardStyles>
      <Profile>
        <img src={propic} alt="propic" />
      </Profile>
      <Review>
        <div>
          <PreviewParagraph>
            <strong>{reviews?.userId?.username}</strong>
          </PreviewParagraph>
          <StarRating rating={reviews?.rating} />
          <ReviewText>{reviews?.review}</ReviewText>
        </div>
      </Review>
    </ReviewCardStyles>
  );
};

export default ReviewCard;
