import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useCart } from "../../../contexts/cart/CartContext";
import "./style.scss";

const CardDetail = ({ path }) => {
  const { cart, setCart } = useCart();

  const [product, setProduct] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const increaseCount = () => {
    setProductCount((prev) => prev + 1);
  };
  const decreaseCount = (id) => {
    setProductCount((prev) => prev - 1);
  };

  const handleProduct = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const addCart = (e) =>
    setCart({ ...cart, product });

  return (
    <div className="card-detail">
      <div className="product-flex">
        <div className="product-img">
          <div className="add-favorite" onClick={() => setFavorite(!favorite)}>
            {!favorite ? <IoIosHeartEmpty /> : <IoIosHeart />}
          </div>
          <img
            src="https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176"
            alt="Lorem ipsum"
          />
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
          <div className="colors">
            Colors:
            <div className="red"> </div>
            <div className="yellow"> </div>
            <div className="blue"> </div>
            <div className="green"> </div>
          </div>
          <div className="size-group">
            <p>Size:</p>
            <select className="size" id="size" name="size" onChange={handleProduct}>
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
            <div className="quantity">
              <i
                className="fa-solid fa-minus count-icon"
                onClick={(e) => decreaseCount()}
              ></i>
              <input
                className="quantity-icon"
                type="text"
                min="0"
                defaultValue={""}
                value={productCount}
              />
              <i
                className="fa-solid fa-plus count-icon"
                onClick={(e) => {
                  increaseCount();
                }}
              ></i>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
