import React from "react";
import List from "../../../components/app/product/list/List";
import Header from "../../../components/shared/header/Header";
import Slider from "../../../components/shared/slider/Slider";
import Footer from "../../../components/shared/footer/Footer";

export const Home = () => {
  return (
    <>
      {/*  <Header title={"shiwear"} /> */}
      <Slider />
      <List />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
