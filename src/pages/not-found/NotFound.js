import React from "react";
import { Link } from "react-router-dom";
import Header from "src/components/shared/header/Header";

import "./style.scss";

export const NotFound = () => {
  return (
    <>
      <Header></Header>
      <div className="not-found">
        <div className="face">
          <div className="band">
            <div className="red"></div>
            <div className="white"></div>
            <div className="blue"></div>
          </div>
          <div className="eyes"></div>
          <div className="dimples"></div>
          <div className="mouth"></div>
        </div>

        <h1>Oops!...</h1>
        {/* <h1>404</h1> */}
        <h1>Not Found</h1>
        <h1>Something went wrong!</h1>
        <Link to="/">
          <div className="btn btn-primary">Home</div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
