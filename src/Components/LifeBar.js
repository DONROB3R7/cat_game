import React from "react";

const LifeBar = ({ LifeValue }) => {
  const LifeConst = {
    width: LifeValue + "100%"
  };

  return (
    <div className="life_bar_border">
      <span className="life_bar" style={LifeConst}>
        Lifebar
      </span>
    </div>
  );
};

export default LifeBar;
