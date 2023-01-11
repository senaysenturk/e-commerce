import React, { useEffect, useState } from "react";
import "./style.scss";
import Modal from "../../../shared/modal/Modal";
import { useAuth } from "src/contexts/auth/AuthContext";
/**
 *
 * @param {{product:Product}} param0
 * @returns
 */
const SmallCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getUserLastViewes, addLastViewed } = useAuth();
  const handleAddLastViewed = () => {
    setIsOpen(true);
    addLastViewed(product);
  };
  useEffect(() => {
    getUserLastViewes();
  }, []);
  // console.log(isOpen);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} product={product} />}
      <div className="small-card">
        <div className="product-img">
          <img src={product.imgPath} alt={product.name} />
        </div>
        <div className="quickview">
          <span className="quickview_icon" onClick={handleAddLastViewed}>
            Quick View
          </span>
          <div className="quickview_info" lang="tr">
            <p>{product.name}</p>
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
