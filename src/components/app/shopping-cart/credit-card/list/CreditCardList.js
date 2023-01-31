import React, { useContext } from "react";
import { useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { AuthContext } from "../../../../../contexts/auth/AuthContext";
import ShopContext from "src/contexts/basket/ShopContext";
import Popup from "../popup/Popup";
import "./style.scss";

export const CreditCardList = ({ handleDisplay, hide }) => {
  const authContext = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteCard = async (cardName) => {
    authContext.deleteCreditCard(cardName);
  };

  return (
    <>
      <div className="add-new-card">
        <HiOutlinePlus />
        <a onClick={handleDisplay}> New Credit Card</a>
      </div>
      <div className="checkout-card">
        {authContext.user[0].cards &&
          authContext.user[0].cards.map((cardObject, index) => {
            return (
              <div className="checkout-card-box" key={index}>
                <div className="card">
                  <div className="card-name">
                    <input
                      type="radio"
                      name="card-name"
                      id="card-name"
                      onChange={() => authContext.setOrderCard(cardObject)}
                    />
                    <label htmlFor="card-name">
                      <h4>{cardObject.cardName}</h4>
                    </label>
                  </div>
                  <div className="card-content">
                    {/* <span>{cardObject.cardNumber}</span> */}
                    <span>
                      {cardObject.cardNumber
                        .slice(0, 7)
                        .concat("** **** ", cardObject.cardNumber.slice(-4))}
                    </span>
                    <span>
                      {cardObject.expirationMonth} / {cardObject.expirationYear}
                    </span>
                  </div>
                </div>
                <div className="edit">
                  <span
                    onClick={() => {
                      togglePopup();
                      setCurrentCard(cardObject);
                    }}
                  >
                    Edit
                  </span>
                </div>
                <div className="divider">
                  <span>|</span>
                </div>
                <div className="delete">
                  <span onClick={() => handleDeleteCard(cardObject.cardName)}>
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {isOpen && <Popup handleClose={togglePopup} currentCard={currentCard} />}
    </>
  );
};

export default CreditCardList;
