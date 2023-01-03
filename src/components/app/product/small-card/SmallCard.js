import React, { useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";
/**
 * 
 * @param {{product:Product}} param0 
 * @returns 
 */
const SmallCard = ({ product}) => {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(isOpen);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} product={product} />}
      <div className="small-card">
        <div className="product-img">
          <img src={product.imgPath} alt="Çiçek işlemeli bluz" />
        </div>
        <div className="quickview">
          <span className="quickview_icon" onClick={() => setIsOpen(true)}>
            Quick View
          </span>
          <div className="quickview_info" lang="tr">
            <p className="quickview_info">{product.name}</p>
            <p className="quickview_info_price" id="bluz">
              {product.price.toFixed(2)} $
            </p>
          </div>

          {/* <div className="colors">
          <div className="red"> </div>
          <div className="yellow"> </div>
          <div className="blue"> </div>
          <div className="green"> </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default SmallCard;
