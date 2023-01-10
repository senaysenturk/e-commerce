import React, { useEffect, useState } from "react";
import "./style.scss";

const ProgressBar = ({ percentage, bgcolor }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(percentage);
    setProgress(percentage);
  }, [percentage]);
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
