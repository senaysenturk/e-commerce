import React from "react";
import List from "../../companents/product/list/List";

import Header from "../../companents/shared/header/Header";

function DashboardLayout() {
  return (
    <div className="App">
      <Header title={"e-commerce"} />
      <List />
    </div>
  );
}

export default DashboardLayout;
