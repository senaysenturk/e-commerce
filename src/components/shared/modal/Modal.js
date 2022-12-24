import React from "react";
import "./style.scss";
import { RiCloseLine } from "react-icons/ri";
import SmallCard from "../../app/product/small-card/SmallCard";
import List from "../../app/product/list/List";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      {/* <div className="darkBG" onClick={() => setIsOpen(false)}> */}
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <List />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
gi;
