import React from "react";
import "./style.scss";

const ProgressBar = ({ completed }) => {
  return (
    <div>
      <div>
        Image uploading... <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
