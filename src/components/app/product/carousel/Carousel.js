import React from "react";
import "./style.scss";

const Carousel = ({ path }) => {
  return (
    <div className="carousel">
      <img className="carousel-img" src={path} alt="Çiçek işlemeli bluz" />
    </div>
  );
};

export default Carousel;
