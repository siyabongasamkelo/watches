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
} from "./Home.styled";
import watch1 from "../../assets/images/hero1.jpg";
import watch2 from "../../assets/images/hero2.jpg";

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
              this you gotta trus me...
            </HeroParagraph>
            <HeroAction>
              <MyButton>Shop Now</MyButton>
            </HeroAction>
          </HeroText>
        </HeroSection>
      </Homestyled>
    </Container>
  );
};

export default Home;
