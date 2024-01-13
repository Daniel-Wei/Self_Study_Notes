import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  This diffing process is possible because of React's virtual DOM,
  and the fact that we have a representation of our UI in memo because we wrote it in JS.

  For every tick in this example, React keeps the last UI version in memo,
  and when it has a new one to take to the browser, that new UI version will also be in memo.
  So React can compute the differences between the new and the old versions.
  
  In this example, the difference was the content of the pre element.
  React will then instruct the browser to update only the computed diff and NOT the whole DOM node.

  Note that the HTML version can be easily changed w a few more lines,
  to make it update only the content of the pre element as well.
  But that requires some imperative programming(命令式编程).
  We will first have to find the element that needs changing in the DOM tree, 
  and add some more imperative logic to change its content.

  However, we are bing declarative in React.
  We just told React that we would like a pre element with the date string, no imperative logic is here.
  And yet we are still getting the efficiency of a tuned-up imperative alternative.

  This is the subtle power here.
  The React way is not only a lot more efficient, 
  but it also removes a big layer of complexity about the way we thinking about updating UIs.

  Having React do all the computations about whether and we should or should not update the DOM,
  enables us to focus on thinking about our data and state, and the way to model that state.
  We then only manage the updates that is needed on the state,
  without worrying the steps need to reflect these updates in the actual UI in the browser.
  Because we know React will do exactly that for us, and it will do it in an efficient way.
*/

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
