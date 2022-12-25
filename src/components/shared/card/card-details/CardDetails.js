import React from "react";
import "./style.scss";

const CardDetails = ({ path }) => {
  return (
    <>
      <div className="product-flex">
        <div className="product-img">
          <img src={path} alt="Çiçek işlemeli bluz" />
        </div>

        <div className="product-info">
          <span className="product-price"></span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>
          <div className="size-group">
            <p>Size:</p>
            <select className="size">
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="quantity-group">
            <p>Quantity:</p>
            <input
              className="quantity"
              max="9999"
              min="1"
              value="1"
              type="number"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Add to cart
          </button>
          <a href="">View Full Item</a>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
