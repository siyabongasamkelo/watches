import styled from "styled-components";

export const SearchItemStyled = styled.div`
  display: flex;
  height: 100px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: rgba(172, 125, 136, 0.3);
  }
`;

export const CoverImage = styled.div`
  width: 30%;
  height: 100%;
  img {
    height: 80%;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const DetailsCover = styled.div`
  width: 70%;
  height: 100%;
`;

export const SearchPrice = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

export const SearchTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-top: 5%;
`;

export const SearchCategory = styled.h3`
  font-size: 14px;
`;
