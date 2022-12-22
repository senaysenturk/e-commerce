import React from "react";
import "./style.scss";

const Card = () => {
  return (
    <div className="small-card">
      <div className="product-img">
        <img
          src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37049069_99.jpg?ts=1665653587346&imwidth=502&imdensity=2"
          alt="Çiçek işlemeli bluz"
        />
      </div>
      <div className="quickview">
        <span class="quickview_icon" id="Swing Dress">
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

export default Card;
