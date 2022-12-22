import React from "react";
import Card from "../card/Card";
import "./style.scss";

const List = () => {
  return (
    <div className="list">
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default List;
