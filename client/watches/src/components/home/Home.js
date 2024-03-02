import { Container } from "react-bootstrap";
import Header from "../header/Header";
import {
  HeroAction,
  HeroHeader,
  HeroImages,
  HeroParagraph,
  HeroSection,
  HeroText,
  Homestyled,
  MyButton,
  SocialMediaIcons,
} from "./Home.styled";
import watch1 from "../../assets/images/hero1.jpg";
import watch2 from "../../assets/images/hero2.jpg";
import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Homestyled>
        <Header />
        <HeroSection>
          <HeroImages>
            <img src={watch1} alt="watch" className="pic1" />
            <img src={watch2} alt="watch" className="pic2" />
          </HeroImages>
          <HeroText>
            <HeroHeader>Luxurious Watches</HeroHeader>
            <HeroParagraph>
              These are the world class watches trust me nothing is better than
              this you gotta trust me...
            </HeroParagraph>
            <HeroAction>
              <Link to={"/shop"}>
                <MyButton>Shop Now</MyButton>
              </Link>
            </HeroAction>
            <SocialMediaIcons>
              <Facebook />
              <Whatsapp />
              <Twitter />
              <Instagram />
            </SocialMediaIcons>
          </HeroText>
        </HeroSection>
      </Homestyled>
    </Container>
  );
};

export default Home;
