import React from "react";
import { HiOutlinePlus } from "react-icons/hi";

const Address = ({ user, hide, handleSetDisplay }) => {
  console.log(hide);
  return (
    <div className="checkout-address">
      <div className="checkout-address-box">
        <div className="address">
          <div className="address-name">
            <input type="radio" name="address-name" id="address-name" />
            <label htmlFor="address-name">
              <h4>Home</h4>
            </label>
          </div>
          <div className="address-content">
            <span>Ihlamurpark Sitesi 4.Etap 1.Kısım B:10 D:23</span>
            <span>BAŞAKŞEHİR / İSTANBUL</span>
          </div>
        </div>
        <div className="edit">
          <a href="#">Edit</a>
        </div>
      </div>
      <div className="checkout-address-box">
        <div className="address">
          <div className="address-name">
            <input type="radio" name="address-name" id="address-name" />
            <label htmlFor="address-name">
              <h4>Home</h4>
            </label>
          </div>
          <div className="address-content">
            <span>Ihlamurpark Sitesi 4.Etap 1.Kısım B:10 D:23</span>
            <span>BAŞAKŞEHİR / İSTANBUL</span>
          </div>
        </div>
        <div className="edit">
          <a href="#">Edit</a>
        </div>
      </div>
      <div className="checkout-address-box">
        <div className="address">
          <div className="address-name">
            <input type="radio" name="address-name" id="address-name" />
            <label htmlFor="address-name">
              <h4>Home</h4>
            </label>
          </div>
          <div className="address-content">
            <span>Ihlamurpark Sitesi 4.Etap 1.Kısım B:10 D:23</span>
            <span>BAŞAKŞEHİR / İSTANBUL</span>
          </div>
        </div>
        <div className="edit">
          <a href="#">Edit</a>
        </div>
      </div>
    </div>
  );
};

export default Address;
