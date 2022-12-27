import React from "react";
import "./style.scss";
import { RiCloseLine } from "react-icons/ri";
import CardSummary from "../card/CardSummary";

const Modal = ({ setIsOpen, path }) => {
  return (
    <>
      {/* <div className="darkBG" onClick={() => setIsOpen(false)}> */}
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <CardSummary path={path} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
