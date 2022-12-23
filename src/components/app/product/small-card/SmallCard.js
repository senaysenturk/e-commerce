import React from "react";
import CardDetails from "../../../shared/card/card-details/CardDetails";
import "./style.scss";

const SmallCard = ({ path }) => {
  return (
    <div className="small-card">
      <div className="product-img">
        <img src={path} alt="Çiçek işlemeli bluz" />
      </div>
      <div className="quickview">
        <span class="quickview_icon" id="Swing Dress" onClick={<CardDetails />}>
          Quick View
        </span>
        <div className="quickview_info" lang="tr">
          <p class="quickview_info">Çiçek işlemeli bluz</p>
          <p class="quickview_info_price" id="bluz">
            $298.00
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
  );
};

export default SmallCard;
