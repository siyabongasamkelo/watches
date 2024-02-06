import styled from "styled-components";

export const Homestyled = styled.section`
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
  height: 100vh;
  width: 100%;
  @media only screen and (max-width: 600px) {
  }
`;

export const HeroSection = styled.div`
  @media only screen and (max-width: 600px) {
    height: 85%;
    width: 100%;
    position: relative;
  }
  @media only screen and (min-width: 768px) {
    height: 85%;
    width: 100%;
    position: relative;
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
`;

export const HeroHeader = styled.h1`
  color: #ac7d88;
  text-align: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const HeroParagraph = styled.p`
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const HeroAction = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const MyButton = styled.button`
  height: 40px;
  min-width: 180px;
  background-color: #fdf0d1;
  border-radius: 30px;
  @media only screen and (max-width: 600px) {
  }
`;
