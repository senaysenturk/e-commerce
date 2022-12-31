import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/header/Header";
import "./style.scss";

const AdminLayout = () => {
  return (
    <>
      <Header title={"shiwear"} />
      <div className="admin-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
