import { MyButton } from "../ProductCard";
import { TextBox } from "../header/Header.styled";
import {
  ReviewFormHeader,
  ReviewFormStyled,
  ReviewForms,
  ReviewTextArea,
  SubmitButtons,
} from "./ReviewForm.styled";

const ReviewForm = () => {
  return (
    <ReviewFormStyled>
      <ReviewForms>
        <ReviewFormHeader>Write a review</ReviewFormHeader>
        <TextBox
          type="number"
          placeholder="rating...0 - 5"
          style={{ width: "100%" }}
        />
        <ReviewTextArea placeholder="type your experience with this product..."></ReviewTextArea>
        <SubmitButtons>
          <MyButton>Submit</MyButton>
          <MyButton>Cancel</MyButton>
        </SubmitButtons>
      </ReviewForms>
    </ReviewFormStyled>
  );
};

export default ReviewForm;
