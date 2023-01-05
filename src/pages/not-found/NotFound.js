import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const NotFound = () => {
  return (
    <>
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
        <div class="home-btn">Home</div>
      </Link>
    </>
  );
};

export default NotFound;
