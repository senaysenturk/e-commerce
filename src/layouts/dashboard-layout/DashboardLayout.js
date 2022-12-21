import React from "react";
import List from "../../components/product/list/List";

import Header from "../../components/shared/header/Header";
import Slider from "../../components/shared/slider/Slider";
function DashboardLayout() {
  return (
    <div className="App">
      <Header title={"e-commerce"} />
      <Slider />
      <List />
    </div>
  );
}

export default DashboardLayout;
