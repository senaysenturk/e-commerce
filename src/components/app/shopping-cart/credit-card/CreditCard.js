import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { AuthContext, useAuth } from "../../../../contexts/auth/AuthContext";
import CreditCardForm from "./form/CreditCardForm";
import CreditCardList from "./list/CreditCardList";
import "./style.scss";

export const CreditCard = () => {
  const { addCereditCard } = useAuth();

  const [hide, setHide] = useState(true);
  const authContext = useContext(AuthContext);
  const [newCreditCard, setNewCreditCard] = useState({});

  const handleCreditCard = (e) => {
    console.log(newCreditCard);
    setNewCreditCard({ ...newCreditCard, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    var response = await addCereditCard(newCreditCard);
    handleDisplay();
  };

  const handleDisplay = async () => {
    setHide(!hide);
  };

  return (
    <>
      <div className="credit-carts">
        <div className="payment-head">
          <header>Payment</header>
        </div>
        {authContext.user[0].cards?.length ? (
          !hide ? (
            <CreditCardForm
              handleCreditCard={handleCreditCard}
              handleSave={handleSave}
            />
          ) : (
            <CreditCardList handleDisplay={handleDisplay} hide={hide} />
          )
        ) : (
          <CreditCardForm
            handleCreditCard={handleCreditCard}
            handleSave={handleSave}
          />
        )}
      </div>
    </>
  );
};

export default CreditCard;
