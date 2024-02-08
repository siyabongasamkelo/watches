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

const Footer = () => {
  return (
    <Container>
      <FooterStyled>
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
        <Subscribe>
          <SubscribeHeader>Let's stay in touch</SubscribeHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SubscribeInput placeholder="Enter your email address" />
            <MyButton>Subscribe</MyButton>
          </div>
        </Subscribe>
      </FooterStyled>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Kalam, cursive",
          marginBottom: "30px",
        }}
      >
        copyright&copy; {new Date().getFullYear()} All rights reserved siyabonga
        Mazibuko
      </div>
    </Container>
  );
};

export default Footer;
