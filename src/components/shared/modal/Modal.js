import React from "react";
import "./style.scss";
import { RiCloseLine } from "react-icons/ri";

import CardDetails from "../card/card-details/CardDetails";

const Modal = ({ setIsOpen, path }) => {
  return (
    <>
      {/* <div className="darkBG" onClick={() => setIsOpen(false)}> */}
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <CardDetails path={path} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
