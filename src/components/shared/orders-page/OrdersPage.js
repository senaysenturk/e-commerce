import React, { useEffect, useState } from "react";
import "./style.scss";
import { TbTruckDelivery } from "react-icons/tb";

const OrdersPage = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  return (
    <div className="order">
      <div className="carousel">
        <div className="order-box">
          <h4>Bowl</h4>
          <div className="bowl-img">
            <img
              className="carousel-img"
              src="https://static.e-stradivarius.net/5/photos3/2022/I/0/1/p/6064/640/551/6064640551_1_1_1.jpg?t=1669728889360&amp;impolicy=stradivarius-itxmediumhigh&amp;imwidth=390&amp;imformat=chrome&amp;imdensity=1.25"
            />
          </div>
        </div>
        <div className="quickview">
          <div className="quickview_info" lang="tr">
            <p className="quickview_info">Çiçek işlemeli bluz</p>
            <p className="quickview_info_price">$298.00</p>
          </div>
        </div>
      </div>
      <div className="color">Kahverengi</div>

      <div className="body-size">
        <select name="body-size">
          <option>XXS</option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
      </div>

      <div className="future-cargo-date">
        <TbTruckDelivery /> Ships on Wednesday, December 28{" "}
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev - amount)}>-1</button>
        <button>{count}</button>
        <button onClick={() => setCount((prev) => prev + amount)}>+1</button>
      </div>
    </div>
  );
};

export default OrdersPage;
