import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { AuthContext, useAuth } from "../../../../contexts/auth/AuthContext";
import { Navigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import Popup from "./Popup";
import list from "src/data";
import ShopContext from "src/contexts/basket/ShopContext";

const Address = ({
  handleSetDisplay,
  setDisplay,
  display,
  // setOrderAddress,
}) => {
  const { editAddress, deleteAddress } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState([]);
  const [editedAddress, setEditedAddress] = useState([]);
  const authContext = useContext(AuthContext);
  const context = useContext(ShopContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleEditAddress = async (addressName) => {
    editAddress(
      authContext.user[0].addresses,
      editedAddress,
      currentAddress.addressName
    );
    setCurrentAddress("");
    setEditedAddress("");
  };

  const handleDeleteAddress = async (addressName) => {
    deleteAddress(authContext.user[0].addresses, addressName);
  };
  console.log(authContext.user[0]);
  authContext.user[0].addresses.map((addressObject, index) => {
    console.log(addressObject);
  });

  return (
    <>
      <div className="add-new-address">
        <HiOutlinePlus />
        <a onClick={handleSetDisplay}> New Address</a>
      </div>
      <div className="checkout-address">
        {authContext.user[0].addresses &&
          authContext.user[0].addresses.map((addressObject, index) => {
            return (
              <div className="checkout-address-box" key={index}>
                <div className="address">
                  <div className="address-name">
                    <input
                      type="radio"
                      name="address-name"
                      id="address-name"
                      onChange={() => authContext.setOrderAddress(addressObject)}
                    />
                    <label htmlFor="address-name">
                      <h4>{addressObject.addressName}</h4>
                    </label>
                  </div>
                  <div className="address-content">
                    <span>{addressObject.address}</span>
                    <span>
                      {addressObject.state} / {addressObject.city}
                    </span>
                  </div>
                </div>
                <div className="edit">
                  <span
                    onClick={() => {
                      setCurrentAddress(addressObject);
                      togglePopup();
                    }}
                  >
                    Edit
                  </span>
                </div>
                <div className="divider">
                  <span>|</span>
                </div>
                <div className="delete">
                  <span
                    onClick={() =>
                      handleDeleteAddress(addressObject.addressName)
                    }
                  >
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {isOpen && (
        <Popup handleClose={togglePopup} currentAddress={currentAddress} />
      )}
    </>
  );
};

export default Address;
