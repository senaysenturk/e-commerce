import React, { useContext, useEffect, useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useParams } from "react-router-dom";
import ShopContext from "../../../contexts/basket/ShopContext";
import { useAuth } from "src/contexts/auth/AuthContext";
import "./style.scss";

const CardDetail = () => {
  const [favorite, setFavorite] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { favorites, setFavorites, getUserFavorites, addFavorite } = useAuth();

  let { productId } = useParams();
  productId = Number(productId);

  const context = useContext(ShopContext);
  const product = context.products.filter(
    (product) => product.id === productId
  )[0];

  const increaseCount = () => {
    setProductCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setProductCount((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    addFavorite(product);
  };

  if (typeof product === "undefined") {
    return <div>...loading</div>;
  }

  return (
    <div className="card-detail">
      <div className="product-flex">
        <div className="product-img">
          <div className="add-favorite" onClick={handleFavorite}>
            {!favorite ? <IoIosHeartEmpty /> : <IoIosHeart />}
          </div>
          <img src={product.imgPath} alt={product.name} />
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-price">{product.price.toFixed(2)} $</span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>
          <div className="colors">
            Colors:
            {product.color.map((_color, index) => (
              <div key={`${_color} ${index}`}>
                <input
                  type="checkbox"
                  name="color"
                  id={_color}
                  onInput={() => {
                    setColor(_color);
                  }}
                />
                <label htmlFor={_color}>
                  <span className={_color} name="color" id={_color}></span>
                </label>
              </div>
            ))}
          </div>
          <div className="size-group">
            <p>Size:</p>
            <select
              className="size"
              defaultValue={product.size[0]}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            >
              <option value="">Select Size</option>
              {product.size.map((_size, index) => (
                <option value={_size} key={`${_size} ${index}`}>
                  {_size}
                </option>
              ))}
            </select>
          </div>
          <div className="quantity-group">
            <p>Quantity:</p>
            <div className="quantity">
              <i
                className="fa-solid fa-minus count-icon"
                onClick={decreaseCount}
              ></i>
              <input
                className="quantity-icon"
                type="text"
                min="0"
                value={productCount}
                readOnly={true}
              />
              <i
                className="fa-solid fa-plus count-icon"
                onClick={increaseCount}
              ></i>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              /** @type {CartProduct}  */
              const copyProduct = { ...product };

              copyProduct.amount = productCount;
              copyProduct.color = color;
              copyProduct.size = size;
              context.addProductToCart(copyProduct);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
