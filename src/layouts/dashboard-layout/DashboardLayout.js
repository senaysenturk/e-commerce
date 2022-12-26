import React from "react";

import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default DashboardLayout;
