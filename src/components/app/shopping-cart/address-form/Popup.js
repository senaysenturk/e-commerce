import React from "react";
import { useState, useEffect } from "react";
import { getCities } from "../../../../network/requests/order/order";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import MaskInput from "react-maskinput";

const Popup = (props) => {
  const { address, getAddresses, editAddress } = useAuth();

  const [addAddress, setAddAddress] = useState({});

  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [enable, setEnable] = useState(true);

  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    console.log(cities);
  };

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
    var response = await editAddress(
      address,
      addAddress,
      props.currentAddress.addressName
    );
    getAddresses();
    // handleSetDisplay();
  };

  useEffect(() => {
    getAllCities();
    getAddresses();
  }, []);

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
            {/* <option>-- None --</option> */}
            {cities.map(
              (cityObject, index) =>
                cityObject.city === props.currentAddress.city && (
                  <option key={index} selected>
                    {cityObject.city}
                  </option>
                )
            )}
            {cities.map((cityObject, index) => (
              <option key={index}>{cityObject.city}</option>
            ))}
          </select>
          <select
            id="state"
            name="state"
            disabled={enable}
            onChange={handleAddress}
          >
            {cities.map((cityObject, index) => {
              cityObject.city === props.currentAddress.city &&
                cityObject.states.map(
                  (state, index) =>
                    state === props.currentAddress.state && (
                      <option key={index} selected>
                        {state}
                      </option>
                    )
                );
            })}

            {/* <option>{props.currentAddress.state}</option> */}

            {city &&
              cities
                .filter((cityName) => cityName.city === city)[0]
                .states.map((state, index) => {
                  return <option key={index}>{state}</option>;
                })}
          </select>
          <textarea
            id="address"
            name="address"
            defaultValue={props.currentAddress.address}
            onChange={handleAddress}
          ></textarea>

          <MaskInput
            alwaysShowMask
            mask={"00000"}
            size={6}
            showMask
            maskChar="_"
            name="postcode"
            defaultValue={props.currentAddress.postcode}
            onChange={handleAddress}
          />

          <input
            type="text"
            id="addressName"
            name="addressName"
            defaultValue={props.currentAddress.addressName}
            onChange={handleAddress}
          />
          <div className="add-button">
            <button className="btn btn-primary" onClick={handleSave}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
