import Header from "../header/Header";
import {
  FilterAndSort,
  SearchItem,
  ShopContent,
  ShopItems,
  ShopStyled,
} from "./Shop.styled";

const Shop = () => {
  return (
    <ShopStyled>
      <Header />
      <ShopContent>
        <FilterAndSort>
          <SearchItem placeholder="search..." />
        </FilterAndSort>
        <ShopItems></ShopItems>
      </ShopContent>
    </ShopStyled>
  );
};

export default Shop;
