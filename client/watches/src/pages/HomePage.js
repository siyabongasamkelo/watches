import React from "react";
import Home from "../components/home/Home";
import Categories from "../components/categories/Categories";
import PopularProducts from "../components/popularProducts/PopularProducts";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Categories />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
