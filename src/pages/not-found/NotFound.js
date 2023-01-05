import React from "react";
import { Link } from "react-router-dom";
import Header from "src/components/shared/header/Header";

import "./style.scss";

export const NotFound = () => {
  return (
    <>
      <Header></Header>
      <div className="not-found">
        <div class="face">
          <div class="band">
            <div class="red"></div>
            <div class="white"></div>
            <div class="blue"></div>
          </div>
          <div class="eyes"></div>
          <div class="dimples"></div>
          <div class="mouth"></div>
        </div>

        <h1>Oops!...</h1>
        {/* <h1>404</h1> */}
        <h1>Not Found</h1>
        <h1>Something went wrong!</h1>
        <Link to="/">
          <div class="btn btn-primary">Home</div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
