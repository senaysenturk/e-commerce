import React from "react";
import { useState, useRef, useEffect } from "react";
import { getCities } from "../../../../network/requests/order/order";
import MaskInput from "react-maskinput";
import { useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import "./style.scss";
import Address from "./Address";
import Form from "./Form";

export const AddressForm = () => {
  const { user, addressInfo, address, getAddresses } = useAuth();
  const [navigate, setNavigate] = useState(false);
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
          {address.length === 0 ? (
            <Form
              handleSetDisplay={handleSetDisplay}
              hide={hide}
              setHide={setHide}
            />
          ) : (
            hide && (
              <div className="add-new-address">
                <HiOutlinePlus />
                <a onClick={handleSetDisplay}> New Address</a>
              </div>
            )
          )}
          {/* {hide && (
            <div className="add-new-address">
              <HiOutlinePlus />
              <a onClick={handleSetDisplay}> New Address</a>
            </div>
          )} */}
        </div>
        {hide ? (
          <>
            <Address handleSetDisplay={handleSetDisplay} hide={hide} />
          </>
        ) : (
          <Form
            handleSetDisplay={handleSetDisplay}
            hide={hide}
            setHide={setHide}
          />
        )}
      </div>
    </>
  );
};

export default AddressForm;
