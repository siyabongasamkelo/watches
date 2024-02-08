import styled from "styled-components";
import { TextBox } from "../header/Header.styled";

export const FooterStyled = styled.footer`
  height: 40vh;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
`;

export const LogoAndEmail = styled.div`
  height: 80%;
  width: 30%;
`;

export const GetHelp = styled.div`
  height: 80%;
  width: 30%;
`;

export const Subscribe = styled.div`
  height: 80%;
  width: 30%;
`;

export const Logo = styled.div`
  height: 100px;
  width: 170px;
  margin-bottom: 40px;
  img {
    height: 100%;
    width: 100%;
    margin-left: -30px;
  }
`;

export const ContactsDetails = styled.p`
  color: ${(props) => props.theme.light.smallText};
  text-align: left;
  font-size: 13px;
  @media only screen and (min-width: 992px) {
    text-align: left;
    font-size: 17px;
  }
  @media only screen and (min-width: 1200px) {
    text-align: left;
    font-size: 15px;
    font-weight: 600;
    padding-top: -10px;
  }
`;

export const GetHelpHeader = styled(ContactsDetails)`
  margin-bottom: 60px;
  font-weight: 800;
  font-size: 20px;
`;

export const GetHelpItems = styled(ContactsDetails)``;

export const SubscribeHeader = styled(GetHelpHeader)``;

export const SubscribeInput = styled(TextBox)`
  width: 250px;
`;

export const MyButton = styled.button`
  height: 60px;
  background-color: ${(props) => props.theme.light.secondary};
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.light.secondary};
  transition: 0.5s ease-in-out;
  font-size: 12px;
  &:hover {
    color: ${(props) => props.theme.light.primary};
  }
  @media only screen and (min-width: 992px) {
    font-size: 15px;
    height: 32px;
  }
`;
