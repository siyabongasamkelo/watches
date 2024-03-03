import { useNavigate } from "react-router-dom";
import {
  CoverImage,
  DetailsCover,
  SearchCategory,
  SearchItemStyled,
  SearchPrice,
  SearchTitle,
} from "./SearchItem.styled";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  const scrollToNone = "none";
  const goToPreviewItem = () => {
    navigate(`/shop/${item?._id}/${scrollToNone}`);
  };

  return (
    <SearchItemStyled
      onClick={() => {
        goToPreviewItem();
      }}
    >
      <CoverImage>
        <img src={item?.image} alt="item" />
      </CoverImage>
      <DetailsCover>
        <SearchTitle>{item?.name}</SearchTitle>
        <SearchCategory>{item?.category}</SearchCategory>
        <SearchPrice>{item?.price}</SearchPrice>
      </DetailsCover>
    </SearchItemStyled>
  );
};

export default SearchItem;
