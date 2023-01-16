import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { getCities } from "../../../../network/requests/order/order";
import MaskInput from "react-maskinput";
import { AuthContext, useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import "./style.scss";
import Address from "./Address";
import Form from "./Form";

export const AddressForm = ({ /* setOrderAddress */ }) => {
  const { addressInfo, address } = useAuth();
  const [navigate, setNavigate] = useState(false);
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [enable, setEnable] = useState(true);
  const authContext = useContext(AuthContext);

  const getAllCities = async () => {
    const response = await getCities();
    setCities(response.data);
    console.log(cities);
  };

  useEffect(() => {
    getAllCities();
  }, []);

  const getStates = async (city) => {
    setStates(cities.filter((cityObject) => cityObject.city === city));
    // console.log("state", states);
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

  if (navigate) {
    return <Navigate to="/order-tracking" />;
  }

  return (
    <>
      {/* {address.length} */}
      <div className="register-addresses">
        <div className="addresses-head">
          <header>Delivery Address</header>
        </div>
        {authContext.user[0].addresses.length ? (
          !hide ? (
            <Form
              handleAddress={handleAddress}
              MaskInput={MaskInput}
              handleSave={handleSave}
              city={city}
              enable={enable}
            />
          ) : (
            <Address
              handleSetDisplay={handleSetDisplay}
              hide={hide}
              // setOrderAddress={setOrderAddress}
            />
          )
        ) : (
          <Form
            handleAddress={handleAddress}
            MaskInput={MaskInput}
            handleSave={handleSave}
            city={city}
            enable={enable}
          />
        )}
      </div>
    </>
  );
};

export default AddressForm;
