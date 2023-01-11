import React, { useEffect, useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";
import { useAuth } from "src/contexts/auth/AuthContext";

/**
 *
 * @param {{product:Product}} param0
 * @returns {JSX.Element}
 */

const Carousel = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getUserLastViewes, addLastViewed } = useAuth();
  const handleAddLastViewed = () => {
    setIsOpen(true);
    addLastViewed(product);
  };
  useEffect(() => {
    getUserLastViewes();
  }, [isOpen]);
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
          <span className="quickview_icon" onClick={handleAddLastViewed}>
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
