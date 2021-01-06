import React, { useState } from "react";
import ReactDOM from "react-dom";

import SkillPoints from "../src/Components/SkillPoints";
import LifeBar from "../src/Components/LifeBar";

import "./styles.css";

const App = () => {
  const [Herolevel, addHeroLevel] = useState(1);

  const [LifeValue, addLifeValue] = useState(1);

  return (
    <React.Fragment>
      <span>Hero Lvl {Herolevel}</span>

      <span onClick={() => addHeroLevel(Herolevel + 1)}>Add lvl</span>

      <SkillPoints Herolevel={Herolevel} life={addLifeValue} />
      <LifeBar LifeValue={LifeValue} />
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
