import React from "react";
import List from "../../components/app/product/list/List";
import Header from "../../components/shared/header/Header";
import Slider from "../../components/shared/slider/Slider";
import Footer from "../../components/shared/footer/Footer";

function DashboardLayout() {
  return (
    <div className="App">
      <Header title={"e-commerce"} />
      <Slider />
      <List />
      <Footer />
    </div>
  );
}

export default DashboardLayout;
