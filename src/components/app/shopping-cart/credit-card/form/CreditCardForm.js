import React, { useState } from "react";
import "./style.scss";

export const CreditCardForm = ({ handleSave }) => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [number, setNumber] = useState("");
  const [focus, setFocus] = useState("");

  const [cardNumber, setCardNumber] = useState("################");
  const [cardHolder, setCardHolder] = useState("FULL NAME");
  const [cardCvv, setCardCvv] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("MM");
  const [expirationYear, setExpirationYear] = useState("YY");

  const handleNumber = (e) => {
    setCardNumber(e.target.value);
  };
  const handleHolder = (e) => {
    setCardHolder(e.target.value);
  };
  const handleMonth = (e) => {
    setExpirationMonth(e.target.value);
  };
  const handleYear = (e) => {
    setExpirationYear(e.target.value);
  };
  const handleCvv = (e) => {
    setCardCvv(e.target.value);
  };
  return (
    <div className="container">
      <div className="card-container">
        <div className="front">
          <div className="image">
            <img src="../credit-cart-images/chip.png" />
            <img src="../credit-cart-images/visa.png" />
          </div>
          <div className="card-number-box">{cardNumber}</div>
          <div className="flexbox">
            <div className="input-box">
              <span>card holder</span>
              <div className="card-holder-name">{cardHolder}</div>
            </div>
            <div className="input-box">
              <span>expires</span>
              <div className="expiration">
                <span className="exp-month">{expirationMonth}</span>/
                <span className="exp-year">{expirationYear}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="stripe"></div>
          <div className="input-box">
            <span>cvv</span>
            <div className="cvv-box">{cardCvv}</div>
            <img src="../credit-cart-images/visa.png" />
          </div>
        </div>
      </div>

      <form action="">
        <div className="inputBox">
          <span>card number</span>
          <input
            type="text"
            maxlength="16"
            className="card-number-input"
            value={number}
            name="number"
            onChange={(e) => {
              setNumber(e.target.value);
              handleNumber(e);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div className="inputBox">
          <span>card holder</span>
          <input
            type="text"
            className="card-holder-input"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              handleHolder(e);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div className="flexbox">
          <div className="inputBox">
            <span>expiration mm</span>
            <select
              name=""
              id=""
              className="month-input"
              onChange={(e) => {
                setMonth(e.target.value);
                handleMonth(e);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            >
              <option value="month" selected disabled>
                month
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="inputBox">
            <span>expiration yy</span>
            <select
              name=""
              id=""
              className="year-input"
              onChange={(e) => {
                setYear(e.target.value);
                handleYear(e);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            >
              <option value="year" selected disabled>
                year
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="inputBox">
            <span>cvv</span>
            <input
              type="text"
              maxlength="4"
              className="cvv-input"
              value={cvv}
              name="cvv"
              onChange={(e) => {
                setCvv(e.target.value);
                handleCvv(e);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
        </div>
        <input type="submit" value="sava" className="submit-btn" onClick={handleSave} />
      </form>

      {(document.querySelector(".cvv-input").onmouseenter = () => {
        document.querySelector(".front").style.transform =
          "perspective(1000px) rotateY(-180deg)";
        document.querySelector(".back").style.transform =
          "perspective(1000px) rotateY(0deg)";
      })(
        (document.querySelector(".cvv-input").onmouseleave = () => {
          document.querySelector(".front").style.transform =
            "perspective(1000px) rotateY(0deg)";
          document.querySelector(".back").style.transform =
            "perspective(1000px) rotateY(180deg)";
        })
      )}
    </div>
  );
};

export default CreditCardForm;
