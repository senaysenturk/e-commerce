import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/header/Header";

function DashboardLayout() {
  return (
    <div className="App">
      <Header title={"shiwear"} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
