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
          <span className="product-price">$298.00</span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>

          <div className="colors">
            Colors:
            <input type="checkbox" name="color" id="red" value="red" />
            <label for="red">
              <span class="red"></span>
            </label>
            <input type="checkbox" name="color" id="black" />
            <label for="black">
              <span class="black"></span>
            </label>
          </div>
          <Link to="products/product/1">More Detail</Link>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
