import React from "react";
import "./style.scss";

const Carousel = ({ path }) => {
  return (
    <div className="carousel">
      <img className="carousel-img" src={path} />
      <div className="quickview">
        <span class="quickview_icon">Quick View</span>
        <div className="quickview_info" lang="tr">
          <p class="quickview_info">Çiçek işlemeli bluz</p>
          <p class="quickview_info_price">$298.00</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
