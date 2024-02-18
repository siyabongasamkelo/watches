import {
  Profile,
  Review,
  ReviewCardStyles,
  ReviewText,
} from "./ReviewCard.styled";
import propic from "../../assets/images/propic5.jpg";
import { PreviewParagraph } from "../previewItem/PreviewItemStyled";

const ReviewCard = () => {
  return (
    <ReviewCardStyles>
      <Profile>
        {/* <div></div> */}
        <img src={propic} alt="propic" />
      </Profile>
      <Review>
        <div>
          <PreviewParagraph>
            <strong>Siya Mazibuko</strong>
          </PreviewParagraph>
          <ReviewText>
            Artificial Intelligent powered watch designed to get you straight
            ahead of time effortlessly without even trying hard...
          </ReviewText>
        </div>
      </Review>
    </ReviewCardStyles>
  );
};

export default ReviewCard;
