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
            <input type="radio" name="color" id="red" value="red" />
            <label for="red">
              <span class="red"></span>
            </label>
            <input type="radio" name="color" id="green" />
            <label for="green">
              <span class="green"></span>
            </label>
            <input type="radio" name="color" id="yellow" />
            <label for="yellow">
              <span class="yellow"></span>
            </label>
            <input type="radio" name="color" id="olive" />
            <label for="olive">
              <span class="olive"></span>
            </label>
            <input type="radio" name="color" id="orange" />
            <label for="orange">
              <span class="orange"></span>
            </label>
            <input type="radio" name="color" id="teal" />
            <label for="teal">
              <span class="teal"></span>
            </label>
            <input type="radio" name="color" id="blue" />
            <label for="blue">
              <span class="blue"></span>
            </label>
            <input type="radio" name="color" id="violet" />
            <label for="violet">
              <span class="violet"></span>
            </label>
            <input type="radio" name="color" id="purple" />
            <label for="purple">
              <span class="purple"></span>
            </label>
            <input type="radio" name="color" id="pink" />
            <label for="pink">
              <span class="pink"></span>
            </label>
          </div>
          <Link to="products/product/1">View Full</Link>
        </div>
      </div>
    </>
  );
};

export default CardSummary;
