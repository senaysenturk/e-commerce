import React from "react";
import "./style.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="product-img">
        <img
          src="https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37049069_99.jpg?ts=1665653587346&imwidth=502&imdensity=2"
          alt="Çiçek işlemeli bluz"
        />
      </div>
      <div className="product-info">
        <p>Çiçek işlemeli bluz</p>
        <p>999 TL</p>
        <div className="colors">
          <div className="red"> </div>
          <div className="yellow"> </div>
          <div className="blue"> </div>
          <div className="green"> </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
