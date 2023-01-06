import React from "react";
import { useState, useRef, useEffect } from "react";
import { getCities } from "../../../../network/requests/order/order";
import MaskInput from "react-maskinput";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import "./style.scss";
import Address from "./Address";

export const AddressForm = () => {
  const { user, addressInfo, address, getAddresses } = useAuth();
  const [navigate, setNavigate] = useState(false);
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [enable, setEnable] = useState(true);

  //getAddresses();

  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    console.log(cities);
  };

  const getStates = async (city) => {
    setStates(cities.filter((cityObject) => cityObject.city === city));
    //console.log("state", states);
  };

  const [addAddress, setAddAddress] = useState({});
  const [hide, setHide] = useState(true);

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
    var response = await addressInfo(addAddress);

    handleSetDisplay();
  };

  const handleSetDisplay = async () => {
    setHide(!hide);
  };

  useEffect(() => {
    getAllCities();
  }, []);

  // useEffect(() => {
  //   getStates(city);
  // }, []);

  if (navigate) {
    return <Navigate to="/order-tracking" />;
  }
  const count = 0;
  return (
    <>
      {/* {address.length} */}
      <div className="register-addresses">
        <div className="addresses-head">
          <header>Delivery Address</header>
          {hide && (
            <div className="add-new-address">
              <HiOutlinePlus />
              <a onClick={handleSetDisplay}> New Address</a>
            </div>
          )}
        </div>
        {hide ? (
          <>
            <Address handleSetDisplay={handleSetDisplay} hide={hide} />
          </>
        ) : (
          <div className="address-form">
            <div className="person">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                onChange={handleAddress}
              />

              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
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
              onChange={handleAddress}
            />

            {/*  
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            onChange={handleAddress}
          /> */}
            <p>Address Informations</p>
            <select id="city" name="city" onChange={handleAddress}>
              <option>-- None --</option>
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
              <option>-- None --</option>

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
              placeholder="Write something.."
              onChange={handleAddress}
            ></textarea>
            {/*  
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Your postal code.."
            onChange={handleAddress}
          /> */}
            <MaskInput
              alwaysShowMask
              mask={"00000"}
              size={6}
              showMask
              maskChar="_"
              name="postcode"
              onChange={handleAddress}
            />

            <input
              type="text"
              id="addressName"
              name="addressName"
              placeholder="Your address name.."
              onChange={handleAddress}
            />
            <div className="add-button">
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressForm;
