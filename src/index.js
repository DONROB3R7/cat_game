import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Cat Game</h1>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
