import React from "react";
import { useState } from "react";
import { getCities } from "../../../../network/requests/order/order";

import "./style.scss";

export const AddressForm = () => {
  const [cities, setCities] = useState([]);

  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    console.log(cities);
  };

  return (
    <>
      <div className="checkout-addresses">
        <div className="checkout-addresses-head">
          <header>Teslimat Adresi</header>
        </div>
        <div className="address-form">
          <div className="person">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
          />

          <p>Address Informations</p>

          <select id="city" name="city">
            <option>-- None --</option>
          </select>
          {/*  {getAllCities()}*/}
          {/*  <select id="city">
            <option>-- None --</option>
            {cities.map((cityObject, index) => (
              <option key={index}>a</option>
            ))}
            {/* {colors.map((color, index) => (
              <option key={index}>{color}</option>
            ))} 
          </select> */}

          <textarea
            id="address"
            name="address"
            placeholder="Write something.."
            //style="height:200px"
          ></textarea>

          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Your postal code.."
          />

          <input
            type="text"
            id="addressName"
            name="addressName"
            placeholder="Your address name.."
          />

          <div className="add-button">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
