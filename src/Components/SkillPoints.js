import React, { useState, useEffect } from "react";

const SkillPoints = ({ Herolevel, life }) => {
  // const remainingPoint = Herolevel * 7;

  // First useEffect
  useEffect(() => {
    SubtractPoint(remainingPoint + 7);
    addTotalArmor((mainArmor + dexPoint * 0.16).toFixed(2));
    lifeUpdate();
  }, [Herolevel]);

  // Second useEffect
  useEffect(() => {
    lifeUpdate(strPoint);
  });

  const [remainingPoint, SubtractPoint] = useState(0);

  const [strPoint, addStrPoint] = useState(0);
  const [dexPoint, addDexPoint] = useState(0);
  const [intPoint, addIntPoint] = useState(0);

  const lifeUpdate = () => {
    life(strPoint);
  };

  // Main Attributes from the hero
  const mainArmor = 2;

  const [totalArmor, addTotalArmor] = useState(0);

  const x = (totalArmor * 0.0006) / (1 + 0.0006 * totalArmor);

  const addPoint = (attribute) => {
    // Checking if there are all left any points
    if (remainingPoint > 0) {
      switch (attribute) {
        case "str":
          addStrPoint(strPoint + 1);
          break;
        case "dex":
          addDexPoint(dexPoint + 1);
          addTotalArmor(mainArmor + dexPoint * 0.16);
          break;
        case "int":
          addIntPoint(intPoint + 1);
          break;
        default:
      }
      SubtractPoint(remainingPoint - 1);
    }
  };
  return (
    <div>
      <span>Point Left {remainingPoint}</span>
      <ul>
        <li onClick={() => addPoint("str")}>Str {strPoint}</li>
        <li onClick={() => addPoint("dex")}>Dex {dexPoint}</li>
        <li onClick={() => addPoint("int")}>Int {intPoint}</li>
      </ul>

      <span>Main Attributes</span>
      <span>Armor: {totalArmor} </span>

      <span>
        Main Physical Resistance
        {(totalArmor * 0.006) / (1 + 0.006 * totalArmor) / 0.01}%
      </span>
    </div>
  );
};

export default SkillPoints;
