import React, { useContext, useEffect, useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import ShopContext from "../../../contexts/basket/ShopContext";
import "./style.scss";

// burası proptan gelecek / path yazan her componente product bilgisi girtmesi gerekiyor.
const dummyData = {
  name: "Straptez Bluz",
  price: "389",
  size: "XL",
  color: "Siyah",
  category: "Woman",
  id: 3,
  cartPrice: " 389",
  img: "https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6202/267/001/6202267001_1_1_2.jpg?t=1669732582176",
};

const CardDetail = ({ path }) => {
  const [favorite, setFavorite] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

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
          <h3 className="product-name">{dummyData.name}</h3>
          <span className="product-price">{dummyData.price}</span>
          <p className="product-detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum odit. Expedita eveniet quam eos, deserunt
            praesentium tempore perspiciatis accusamus amet sed repellendus non,
            distinctio molestiae. Quos quo ducimus ratione.
          </p>
          <div className="colors">
            Colors:
            <input type="checkbox" name="color" id="red" />
            <label for="red">
              <span class="red" name="color" id="red"></span>
            </label>
            <input type="checkbox" name="color" id="black" />
            <label for="black">
              <span class="black"></span>
            </label>
          </div>
          <div className="size-group">
            <p>Size:</p>
            <select className="size" defaultValue={dummyData.size}>
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
              dummyData.amount = productCount;
              context.addProductToCart(dummyData);
              console.log(context);
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
