import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import "./style.scss";

const CardSummary = ({ path }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div className="product-flex">
        <div className="product-img">
          <div className="add-favorite" onClick={() => setFavorite(!favorite)}>
            {!favorite ? <IoIosHeartEmpty /> : <IoIosHeart />}
          </div>
          <img src={path} alt="Lorem ipsum" />
        </div>

        <div className="product-info">
          <h3 className="product-name">Lorem Ipsum</h3>
          <span className="product-price">$218.00</span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>
          {/* <div className="size-group">
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
            <input className="quantity" max="9999" min="1" type="number" />
          </div>
          <button type="button" className="btn btn-primary">
            Add to cart
          </button> */}
          <div className="colors">
            Colors:
            <div className="red"> </div>
            <div className="yellow"> </div>
            <div className="blue"> </div>
            <div className="green"> </div>
          </div>
          <Link to="products/product/1">VIEW FULL</Link>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
