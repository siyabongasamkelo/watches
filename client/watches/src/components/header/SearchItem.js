import { useNavigate } from "react-router-dom";
import {
  CoverImage,
  DetailsCover,
  SearchCategory,
  SearchItemStyled,
  SearchPrice,
  SearchTitle,
} from "./SearchItem.styled";
import { currencyFormatter } from "../../utils/Services";

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
        <SearchPrice>{currencyFormatter?.format(item?.price)}</SearchPrice>
      </DetailsCover>
    </SearchItemStyled>
  );
};

export default SearchItem;
