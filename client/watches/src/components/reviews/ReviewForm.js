import { reviewSchema } from "../../validations/ReviewValidation";
import {
  ReviewFormHeader,
  ReviewFormStyled,
  ReviewForms,
  ReviewInput,
  ReviewSubmit,
  ReviewTextArea,
  SubmitButtons,
} from "./ReviewForm.styled";
import { useFormik } from "formik";
import { ErrorLabel } from "../login/Login.Styled";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-bootstrap/Spinner";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};

const ReviewForm = ({ closeForm, itemId }) => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      review: "",
      rating: 0,
    },
    validationSchema: reviewSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const { review } = formik.values;
        const { rating } = formik.values;

        const addReview = await postRequest(`${baseUrl}/review/create`, {
          review,
          rating,
          userId: user?.id,
          itemId,
        });

        if (addReview?.error) {
          showToastErrorMessage(
            "there was a problem while adding your review please try again"
          );
          setLoading(false);
          closeForm();
          return showToastErrorMessage(addReview?.err?.response?.data);
        }

        successToastMessage(addReview?.data?.data);
        setLoading(false);
        closeForm();
      } catch (err) {
        console.log(err.message);
        setLoading(false);
        showToastErrorMessage("Something went wrong please try again later");
        closeForm();
      }
    },
  });

  return (
    <ReviewFormStyled>
      <ReviewForms onSubmit={formik?.handleSubmit}>
        <ReviewFormHeader>Write a review</ReviewFormHeader>
        <div>
          <ReviewInput
            type="number"
            name="rating"
            value={formik.values.rating}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="rating...0 - 5"
            style={{ width: "100%" }}
          />
          {formik?.errors && <ErrorLabel>{formik?.errors?.rating}</ErrorLabel>}
        </div>

        <div>
          <ReviewTextArea
            placeholder="type your experience with this product..."
            name="review"
            value={formik.values.review}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          ></ReviewTextArea>
          {formik?.errors && <ErrorLabel>{formik?.errors?.review}</ErrorLabel>}
        </div>

        <SubmitButtons>
          <ReviewSubmit type="submit">
            {loading ? (
              <div className=" d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" />
                <span style={{ marginLeft: "10px" }}>Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </ReviewSubmit>

          <ReviewSubmit onClick={closeForm}>Cancel</ReviewSubmit>
        </SubmitButtons>
      </ReviewForms>
    </ReviewFormStyled>
  );
};

export default ReviewForm;
