import React from "react";
import { Outlet } from "react-router-dom";

import Login from "../../pages/auth/login/Login";
import SignUp from "../../pages/auth/sign-up/SignUp";

export const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
