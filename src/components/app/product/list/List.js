import React from "react";
import SmallCard from "../small-card/SmallCard";
import BigCard from "../big-card/BigCard";
import "./style.scss";

const List = () => {
  return (
    <div className="list">
      <div className="row">
        <div className="column">
          <div className="column-1">
            <BigCard />
          </div>
          <div className="column-2">
            <div className="row">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
            <div className="row">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="column-1">
            <BigCard />
          </div>
          <div className="column-2">
            <div className="row">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
            <div className="row">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
