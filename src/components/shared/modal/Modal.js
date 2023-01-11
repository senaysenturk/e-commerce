import React from "react";
import "./style.scss";
import { RiCloseLine } from "react-icons/ri";
import CardSummary from "../card/CardSummary";

/**
 *
 * @param {{product:Product, setIsOpen:boolean }} param0
 * @returns {JSX.Element}
 */
const Modal = ({ setIsOpen, product }) => {
  return (
    <>
      {/* <div className="darkBG" onClick={() => setIsOpen(false)}> */}
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <CardSummary product={product} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
