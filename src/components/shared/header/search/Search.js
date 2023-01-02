import React from "react";
import "./style.scss";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search">
      <span className="search-icon">
        <AiOutlineSearch />
      </span>
      <input type="text" />
    </div>
  );
};

export default Search;
