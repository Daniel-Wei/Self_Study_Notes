import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");
const render = () => {
  //will NOT be able to type smt in the text box
  //we are basically throwing away the whole DOM node on every tick and regenerating it

  // rootElement.innerHTML = `
  //   <div>
  //     Hello HTML
  //     <input />
  //     ${new Date().toLocaleTimeString()}
  //   </div>
  // `;

  //Although the whole React rendering code is within our ticking toLocaleTimeString
  //React is changing ONLY the timestamp text and NOT the whole DOM node.

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    rootElement
  );
};

setInterval(render, 1000);
