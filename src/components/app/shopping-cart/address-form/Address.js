import React from "react";
import { useState, useRef, useEffect } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";

const Address = ({ setDisplay, display }) => {
  const { user, getAddresses, address } = useAuth();
  const [navigate, setNavigate] = useState(false);

  getAddresses();

  return (
    <div className="checkout-address">
      <div className="addresses-head">
        <header>Delivery Address</header>
        <div className="add-new-address">
          <HiOutlinePlus />
          <a>New Address</a>
        </div>
      </div>
      {address.map((addressObject) => {
        return (
          <div className="checkout-address-box">
            <div className="address">
              <div className="address-name">
                <input type="radio" name="address-name" id="address-name" />
                <label htmlFor="address-name">
                  <h4>{addressObject.addressName}</h4>
                </label>
              </div>
              <div className="address-content">
                <span>{addressObject.address}</span>
                <span>
                  {addressObject.country} / {addressObject.city}
                </span>
              </div>
            </div>
            <div className="edit">
              <a href="#">Edit</a>
            </div>
          </div>
        );
      })}

      {/* 
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
      */}
    </div>
  );
};

export default Address;
