import React, { useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";

const Carousel = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} path={path} />}
      <div className="carousel">
        <img className="carousel-img" src={path} />
        <div className="quickview">
          <span className="quickview_icon" onClick={() => setIsOpen(true)}>
            Quick View
          </span>
          <div className="quickview_info" lang="tr">
            <p className="quickview_info">Çiçek işlemeli bluz</p>
            <p className="quickview_info_price">$298.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
