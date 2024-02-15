import Header from "../header/Header";
import {
  AddItemContent,
  AddItemForm,
  AddItemHeader,
  AddItemInput,
  AddItemStyled,
  Label,
  TextArea,
} from "./AddItem.styled";
import { useFormik } from "formik";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { itemSchema } from "../../validations/ItemValidation";
import { ErrorLabel, SubmitButton } from "../login/Login.Styled";
import Form from "react-bootstrap/Form";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};
const AddItem = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
      image: null,
    },
    validationSchema: itemSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        const { name } = formik.values;
        const { price } = formik.values;
        const { category } = formik.values;
        const { image } = formik.values;
        const { description } = formik.values;
        const { quantity } = formik.values;

        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("quantity", quantity);

        const loggingUser = await postRequest(
          `${baseUrl}/item/create`,
          formData
        );

        if (loggingUser?.error) {
          showToastErrorMessage("there was a problem while adding your item");
          setLoading(false);
          return showToastErrorMessage(loggingUser?.err?.response?.data);
        }

        setLoading(false);
        successToastMessage("item added successfully");
      } catch (err) {
        console.log(err.message);
        setLoading(false);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <AddItemStyled>
      <Header />
      <ToastContainer />
      <AddItemContent>
        <AddItemHeader>Add item</AddItemHeader>
        <AddItemForm onSubmit={formik.handleSubmit}>
          <div>
            <AddItemInput
              placeholder="item name..."
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.name}</ErrorLabel>}
          </div>
          <div>
            <AddItemInput
              placeholder="item price..."
              name="price"
              value={formik.values.price}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.price}</ErrorLabel>}
          </div>

          <div>
            <Form.Select
              aria-label="Default select example"
              name="category"
              value={formik.values.category}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              <option>Item Category</option>
              <option value="advanced">Advanced</option>
              <option value="minimal">Minimal</option>
              <option value="classic">Classic</option>
            </Form.Select>

            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.category}</ErrorLabel>
            )}
          </div>

          <div>
            <TextArea
              placeholder="item description..."
              name="description"
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            ></TextArea>

            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.description}</ErrorLabel>
            )}
          </div>

          <div>
            <AddItemInput
              type="number"
              placeholder="item quantity..."
              name="quantity"
              value={formik.values.quantity}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors && (
              <ErrorLabel>{formik?.errors?.quantity}</ErrorLabel>
            )}
          </div>

          <div>
            <Label>Item Image: </Label>
            <br></br>
            <input
              type="file"
              name="image"
              onChange={(e) => {
                formik.setFieldValue("image", e.target.files[0]);
              }}
            />
            {formik?.errors && <ErrorLabel>{formik?.errors?.image}</ErrorLabel>}
          </div>
          <SubmitButton type="submit">
            {loading ? "submitting..." : "submit"}
          </SubmitButton>
        </AddItemForm>
      </AddItemContent>
    </AddItemStyled>
  );
};

export default AddItem;
