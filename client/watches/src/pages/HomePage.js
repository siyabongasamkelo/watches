import React from "react";
import Home from "../components/home/Home";
import Categories from "../components/categories/Categories";
import PopularProducts from "../components/popularProducts/PopularProducts";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Categories />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
