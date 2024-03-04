import {
  ContactsDetails,
  FooterStyled,
  GetHelp,
  GetHelpHeader,
  GetHelpItems,
  Logo,
  LogoAndEmail,
  MyButton,
  Subscribe,
  SubscribeHeader,
  SubscribeInput,
} from "./Footer.styled";
import { Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { Paypal } from "react-bootstrap-icons";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../validations/UserValidation";
import { baseUrl, postRequest } from "../../utils/Services";
import { ErrorLabel } from "../login/Login.Styled";
import { toast, ToastContainer } from "react-toastify";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async () => {
      try {
        const { email } = formik.values;

        const subscribe = await postRequest(`${baseUrl}/subscribers/register`, {
          email,
        });

        if (subscribe?.error) {
          showToastErrorMessage(
            "there was a problem while subscribing please try again"
          );

          return showToastErrorMessage(subscribe?.err?.response?.data);
        }

        successToastMessage("Subscribed successfully");
      } catch (err) {
        console.log(err?.message);

        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <Container>
      <FooterStyled>
        <ToastContainer />
        <LogoAndEmail>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <ContactsDetails>Phone: +27 61 189 2231</ContactsDetails>
          <ContactsDetails>
            Email: siyabongasamkelociam@gmail.com
          </ContactsDetails>
        </LogoAndEmail>
        <GetHelp>
          <GetHelpHeader>Get Help</GetHelpHeader>
          <GetHelpItems>FAQs</GetHelpItems>
          <GetHelpItems>Privacy Policy</GetHelpItems>
          <GetHelpItems>Terms & Conditions</GetHelpItems>
          <GetHelpItems>Store Manager</GetHelpItems>
          <GetHelpItems>We accept :</GetHelpItems>
          <Paypal />
        </GetHelp>
        <Subscribe onSubmit={formik.handleSubmit}>
          <SubscribeHeader>Let's stay in touch</SubscribeHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SubscribeInput
              placeholder="Enter your email address"
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik?.errors.email && (
              <ErrorLabel>{formik?.errors?.email}</ErrorLabel>
            )}
            <MyButton type="submit" value="submit">
              Subscribe
            </MyButton>
          </div>
        </Subscribe>
      </FooterStyled>
      <div
        style={{
          fontFamily: "Kalam, cursive",
          marginBottom: "30px",
        }}
      >
        <GetHelpItems style={{ textAlign: "center" }}>
          copyright&copy; {new Date().getFullYear()} All rights reserved
          siyabonga Mazibuko
        </GetHelpItems>
      </div>
    </Container>
  );
};

export default Footer;
