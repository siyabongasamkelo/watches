import styled from "styled-components";

export const Homestyled = styled.section`
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
  height: 100vh;
  width: 100%;
`;

export const HeroSection = styled.div`
  height: 85%;
  width: 100%;
  position: relative;
  @media only screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const HeroImages = styled.div`
  @media only screen and (max-width: 600px) {
    height: 60%;
    width: 100%;
    .pic1 {
      height: 35%;
      width: 40%;
      border-radius: 10px;
      position: absolute;
      left: 5%;
      top: 5%;
    }
    .pic2 {
      height: 25%;
      width: 45%;
      border-radius: 10px;
      position: absolute;
      top: 25%;
      left: 50%;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 60%;
    width: 100%;
    .pic1 {
      height: 35%;
      width: 40%;
      border-radius: 10px;
      position: absolute;
      left: 9%;
      top: 5%;
    }
    .pic2 {
      height: 25%;
      width: 40%;
      border-radius: 10px;
      position: absolute;
      top: 25%;
      left: 51%;
    }
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
    width: 50%;
    .pic1 {
      height: 43%;
      width: 23%;
      border-radius: 10px;
      position: absolute;
      left: 0%;
      top: 10%;
    }
    .pic2 {
      height: 33%;
      width: 17%;
      border-radius: 10px;
      position: absolute;
      top: 42%;
      left: 25%;
    }
  }
`;

export const HeroText = styled.div`
  @media only screen and (max-width: 600px) {
    height: 40%;
    width: 60%;
    margin-left: 20%;
  }
  @media only screen and (min-width: 768px) {
    height: 40%;
    width: 60%;
    margin-left: 20%;
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
    width: 35%;
  }
`;

export const HeroHeader = styled.h1`
  color: ${(props) => props.theme.light.primary};
  text-align: center;
  @media only screen and (min-width: 1200px) {
    padding-top: 15%;
    font-size: 52px;
  }
`;

export const HeroParagraph = styled.p`
  color: ${(props) => props.theme.light.smallText};
  text-align: center;
  @media only screen and (min-width: 1200px) {
    text-align: left;
    font-size: 17px;
  }
`;

export const HeroAction = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1200px) {
    justify-content: left;
    margin-top: 8%;
  }
`;

export const SocialMediaIcons = styled.div`
  height: 60px;
  width: 150px;
  margin-top: 70%;
  display: none;
  @media only screen and (min-width: 1200px) {
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      transform: scale(1.6);
      cursor: pointer;
      fill: ${(props) => props.theme.light.primary};
      transition: 0.5s ease-in-out;
      &:hover {
        transform: scale(1.7);
      }
    }
  }
`;

export const MyButton = styled.button`
  height: 40px;
  min-width: 180px;
  background-color: ${(props) => props.theme.light.secondary};
  border-radius: 30px;
`;
