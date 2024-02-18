import styled from "styled-components";
import { PreviewParagraph } from "../previewItem/PreviewItemStyled";

export const ReviewCardStyles = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.light.secondary};
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    width: 45%;
  }
  @media only screen and (min-width: 1200px) {
    width: 35%;
  }
`;

export const Profile = styled.div`
  width: 15%;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin: 15px;
    object-fit: cover;
  }
`;

export const Review = styled.div`
  width: 85%;
  div {
    width: 90%;
    padding: 10px;
    margin-left: 5%;
    margin-top: 6%;
  }
`;

export const ReviewText = styled(PreviewParagraph)`
  margin: 0;
  padding: 0;
`;
