import React from "react";

import "./style.scss";

export const AddressForm = () => {
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

          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

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
