import React, { useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";

/**
 *
 * @param {{product:Product}} param0
 * @returns {JSX.Element}
 */

const Carousel = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} product={product} />}
      <div className="carousel">
        <img
          className="carousel-img"
          src={product.imgPath}
          alt={product.name}
        />
        <div className="quickview">
          <span className="quickview_icon" onClick={() => setIsOpen(true)}>
            Quick View
          </span>
          <div className="quickview_info" lang="tr">
            <p className="quickview_info">{product.name}</p>
            <p className="quickview_info_price">{product.price} $</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
