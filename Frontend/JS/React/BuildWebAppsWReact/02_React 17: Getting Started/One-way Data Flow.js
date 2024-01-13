import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  Basic Concept of Responsibility Isolation
  Each component here has certain responsibilities, and they get to focus on that.
*/

function Button(props) {
  return <button onClick={props.handleClick}>+1</button>;
}

// Display
function Display(props) {
  return <div>{props.message}</div>;
}

// App: Component for Button and Display together
function App() {
  //Make this counter state accessible to both sibling components
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  return (
    <div>
      {/* Parent components can also flow their behaviours to their children
      components */}
      <Button handleClick={incrementCounter} />
      {/* flow some date from the parent to the child  */}
      {/* one-way flow of data: Parent components can flow their data down to their children components */}
      <Display message={counter} />
    </div>
  );
}

const rootElement = document.getElementById("root");

//1. Render an array of elements and insert into that array as many React elements as we wish: usually a good solution when all the elements being rendered are coming from the same components in a dynamic way
//[<Button />, <Display />,],

//2. Make these two React elements the children of another React element, like enclosing them in a div
// <div>
//   <Button />
//   <Display />
// </div>,

//3. React has a special Element, React.Fragment, to enclose multiple elements, without introducing a new div parent
// <React.Fragment>
//   <Button />
//   <Display />
// </React.Fragment>,

//4. JSX Shortcut for 3_React.Fragment
// <>
//   <Button />
//   <Display />
// </>,
ReactDOM.render(<App />, rootElement);
