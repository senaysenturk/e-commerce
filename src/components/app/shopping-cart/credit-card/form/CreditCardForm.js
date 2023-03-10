import React, { useState } from "react";
import MaskInput from "react-maskinput";
import "./style.scss";

export const CreditCardForm = ({ handleCreditCard, handleSave }) => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [number, setNumber] = useState("");
  const [focus, setFocus] = useState("");
  const [frontStyle, setFrontStyle] = useState("");
  const [backStyle, setBackStyle] = useState("");
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardHolder, setCardHolder] = useState("FULL NAME");
  const [cardCvv, setCardCvv] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("MM");
  const [expirationYear, setExpirationYear] = useState("YY");
  const [cardName, setCardName] = useState("");
  const [index, setIndex] = useState(1);

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

  const handleStyle = (type) => {
    if (type === "mouseenter") {
      setFrontStyle("perspective(1000px) rotateY(-180deg)");
      setBackStyle("perspective(1000px) rotateY(0deg)");
    } else {
      setFrontStyle("perspective(1000px) rotateY(0deg)");
      setBackStyle("perspective(1000px) rotateY(-180deg)");
    }
    console.log(frontStyle, backStyle);
  };
  // {(document.querySelector(".cvv-input").onmouseenter = () => {
  //   document.querySelector(".front").style.transform =
  //     "perspective(1000px) rotateY(-180deg)";
  //   document.querySelector(".back").style.transform =
  //     "perspective(1000px) rotateY(0deg)";
  // })(
  //   (document.querySelector(".cvv-input").onmouseleave = () => {
  //     document.querySelector(".front").style.transform =
  //       "perspective(1000px) rotateY(0deg)";
  //     document.querySelector(".back").style.transform =
  //       "perspective(1000px) rotateY(0deg)";
  //   })
  // )}
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card-inner">
            <div className="front" style={{ transform: frontStyle }}>
              <img src="../credit-cart-images/map.png" className="map-img" />
              <div className="image">
                <img
                  src="../credit-card-images/chip.png"
                  style={{ width: "60px" }}
                />
                <img
                  src="../credit-card-images/visa.png"
                  style={{ width: "80px" }}
                />
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
                    <span className="exp-month">{expirationMonth}</span>
                    <span className="divider"> / </span>
                    <span className="exp-year">{expirationYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="back" style={{ transform: backStyle }}>
            <img src="../credit-card-images/map.png" className="map-img" />
            <div className="stripe"></div>
            <div className="input-box">
              <span>cvv</span>
              <div className="cvv-box">
                <img src="../credit-card-images/pattern.png" />
                <p>{cardCvv}</p>
              </div>
              <img src="../credit-card-images/visa.png" />
            </div>
          </div>
        </div>

        <form action="">
          <div className="inputBox">
            <span>card number</span>
            <MaskInput
              alwaysShowMask
              mask={"0000 0000 0000 0000"}
              size={21}
              className="card-number-input"
              showMask
              maskChar="_"
              value={number}
              name="cardNumber"
              onChange={(e) => {
                setNumber(e.target.value);
                handleNumber(e);
                handleCreditCard(e);
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
              name="cardHolder"
              onChange={(e) => {
                setName(e.target.value);
                handleHolder(e);
                handleCreditCard(e);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                name="expirationMonth"
                id=""
                className="month-input"
                onChange={(e) => {
                  setMonth(e.target.value);
                  handleMonth(e);
                  handleCreditCard(e);
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
                name="expirationYear"
                id=""
                className="year-input"
                onChange={(e) => {
                  setYear(e.target.value);
                  handleYear(e);
                  handleCreditCard(e);
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
                  handleStyle("mouseenter");
                  setCvv(e.target.value);
                  handleCvv(e);
                  handleCreditCard(e);
                }}
                onFocus={(e) => setFocus(e.target.name)}
                onMouseEnter={(e) => handleStyle("mouseenter")}
                onMouseLeave={(e) => handleStyle("mouseleave")}
              />
            </div>
          </div>

          <div className="inputBox">
            <span>Card Name</span>
            <input
              type="text"
              minlength="2"
              className="name-input"
              value={cardName}
              name="cardName"
              onChange={(e) => {
                setCardName(e.target.value);
                handleCreditCard(e);
              }}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>

          <input
            type="submit"
            value="save"
            className="submit-btn"
            onClick={handleSave}
          />
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;
