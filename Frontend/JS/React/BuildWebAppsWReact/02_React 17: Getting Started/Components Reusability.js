import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Button(props) {
  const handleClick = () => props.handleClick(props.amountOfIncrement);
  return (
    //onClick={props.handleClick(props.amountOfIncrement)} will NOT work
    //as we need a functio reference for the onClick eventHandler, NOT an invocation of a function
    //fix: simply wrap this invocation in an inline function to make it into a reference
    <button onClick={handleClick}>+{props.amountOfIncrement}</button>
  );
}

// Display
function Display(props) {
  return <div>{props.message}</div>;
}

// App: Component for Button and Display together
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (amountOfIncrement) =>
    setCounter(counter + amountOfIncrement);

  return (
    <div>
      <Button handleClick={incrementCounter} amountOfIncrement={1} />
      <Button handleClick={incrementCounter} amountOfIncrement={2} />
      <Button handleClick={incrementCounter} amountOfIncrement={5} />
      <Button handleClick={incrementCounter} amountOfIncrement={10} />
      <Button handleClick={incrementCounter} amountOfIncrement={25} />

      <Display message={counter} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
