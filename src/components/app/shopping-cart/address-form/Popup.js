import React from "react";
import { useState } from "react";
import MaskInput from "react-maskinput";

const Popup = (props) => {
  const [addAddress, setAddAddress] = useState({});

  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [enable, setEnable] = useState(true);

  const getStates = async (city) => {
    setStates(cities.filter((cityObject) => cityObject.city === city));
    // console.log("state", states);
  };

  const handleAddress = (e) => {
    // console.log(addAddress);
    setAddAddress({ ...addAddress, [e.target.name]: e.target.value });

    if (e.target.name === "city") {
      setCity(e.target.value);
      getStates(city);
      setEnable(false);
    }
  };

  const handleSave = async (e) => {
    /* var response = await addressInfo(addAddress);
    getAddresses();
    handleSetDisplay(); */
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {console.log(props.currentAddress)}
        <div className="address-form">
          <div className="person">
            <input
              type="text"
              id="fname"
              name="firstname"
              defaultValue={props.currentAddress.firstname}
              onChange={handleAddress}
            />

            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              defaultValue={props.currentAddress.lastname}
              onChange={handleAddress}
            />
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            defaultValue={props.currentAddress.phone}
            onChange={handleAddress}
          />
          <MaskInput
            alwaysShowMask
            mask={"+90 (000) 000 - 0000"}
            size={21}
            showMask
            maskChar="_"
            name="phone"
            defaultValue={props.currentAddress.phone}
            onChange={handleAddress}
          />
          <p>Address Informations</p>
      <select id="city" name="city" onChange={handleAddress}>
        <option>-- None --</option>
        {cities.map((cityObject, index) => (
          <option key={index}>{cityObject.city}</option>
        ))}
      </select>
          <textarea
            id="address"
            name="address"
            defaultValue={props.currentAddress.address}
            onChange={handleAddress}
          ></textarea>
          <input
            type="text"
            id="addressName"
            name="addressName"
            defaultValue={props.currentAddress.addressName}
            onChange={handleAddress}
          />
          <div className="add-button">
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
