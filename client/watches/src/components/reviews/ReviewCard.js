import {
  Profile,
  Review,
  ReviewCardStyles,
  ReviewText,
} from "./ReviewCard.styled";
import propic from "../../assets/images/propic5.jpg";
import { PreviewParagraph } from "../previewItem/PreviewItemStyled";

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
          <ReviewText>{reviews?.review}</ReviewText>
        </div>
      </Review>
    </ReviewCardStyles>
  );
};

export default ReviewCard;
