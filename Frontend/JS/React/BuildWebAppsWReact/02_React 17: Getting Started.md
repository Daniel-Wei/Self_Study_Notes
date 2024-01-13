### React 17: Getting Started

#### 1. The Basics
  
  - **Why React**
    - Definition: A JS Library for building user interfaces
    - Since web browsers understand JS, we can use React to describe web user interfaces
    - **React is "declarative"**: We just tell React what we want, and it will build the actual user interfaces on our behalf in the web browser.
    - HTML and React
      - HTML: Declarative for Static Content
      - React; Declarative for Dynamic Data
    - Disadvantages of Frameworks
      - Limited Flexibility: Do things in a certain way; Hard to deviate
      - Larege and Full of features: Hard to customize; Use the whole thing
     
    - Advantages of React
      - Gives devs the ability to work with a 'virtual' browser that is friendlier than the real browser (DOM API)
      - 'Just JavaScript'
      - React Native (for the win): Learning React pays off big time for iOS and Android mobile applications as well
      - Battle-tested: deved and tested by FB
      - **Declarative Language** (Model UI and State)
        - Established a new language between developers and browsers that allowed developers to declaratively describe stateful user interfaces.
        - Instead of coming up with steps for the transactions on their interfaces, developers just describe the interfaces in terms of a final state, like a function
        - When transactions happen to that state, React takes care of updating the user interfaces based on that.
       
  - **React's Basic Concepts**
    - Components
      - Like Functions
      - Input: props, state | Output: UI
      - Reusable and Composable
      - <Component />: NOT really invoke a React component, just use it in the HTML as if it were just a regular HTML element
      - Can manage a private state: to hold any data that may chanfe over the lifecycle of the component
      - Both Function & Class Components:
      - Can be stateful and have side effects
      - Can be purely presentational
      - Use a set of props and state as their input
      - Output what looks like HTML, but is really a special JS syntax called JSX
      - The prop input is an explicit one, similar to the list of attributes an HTML element can have
      - The state input is an internal one, which React uses to auto-reflect changes in the browser
      - Within a component, the state object can be changed while the props object represents fixed values
      - Props are immutable: Components can ONLY change their internal state, NOT their properties
      - Examples
        ```
        const MyComponent = (props) => {
          return (
            <domElememtOrCompoenent ... />
          )
        }

        class MyComponent extends React.Component {
          render(){
            return (
              <domElememtOrCompoenent ... />
            )
          }
        }

      - JSX is NOT HTML
        ```
        class Hello extends React.Component {
          render() {
            return (
              // JSX
              <div className="container">
                <h1>Getting Started</h1>
              </div>

              // Compiled pure HTML from JSX above
              React.createElement("div", { className: "container"},
                React.createElement("h1", null, "Getting Started")
              )
            )
          }
        }

    - Reactive Updates
      - In React, NO need to worry about how to reflect these changes or even manege when to take changes to the browser
      - React will react: React will simply react to the changes in a component's state
      - Take updates to the browser: React will automatically update the parts of the DOM that need to be updated

    - Virtual views in memory
      - Generate HTML using JS
        - When Web application receives just the data from the server in the background with AJAX, need smt more than HTML to work with that data: Enhanced HTML template that has loops and conditionals, OR Rey on the power of JS itself to generate the HTML from the data
      - NO HTML template language
        - React embraces the latter one and eliminates the extra step needed to parse and enhance the HTML template
      - Tree Reconciliation(调和) algorithm
        - Virtual DOM
        - React uses the virtual DOM to compate versions of the UI in memnory before it acts on them
       
  - **First React Component Example**
      - Playground
        - https://jscomplete.com/playground 
        - Use the HTML element with the ID of mountNode: document.getElementById('mountNode')
        - Both React and ReactDOM are already preloaded: the playground understands the JSX syntax
        - Add React DevTools Extension: Allows us to inspect and interact w any React application on any website
        - First URL: jsdrops/rgs1.1 (rgs: React Getting Started)
          ```
          function Hello() {
            // JSX, not HTML
            // will NOT executed by the browser
            // will be executed by the JSX extension and compiled to smt else, which the browser can understand.
          	//return <div>Hello React!</div>;
            
            // HTML
            // Argument 1: the element to be created
            // Argument 2: Any attribute this element will have
            // Argument 3: The child of the element to be created 
            return React.createElement('div', null, 'Hello React!!!');
          }
          
          // To display a React component in a browser, we need to instruct the ReactDOM library on how to do that.
          // Takes in two arguments
          // 1. The component to render, in our case ut is the Hello component
          // 2. The DOM element in the browser where we wish the React component to show up.
          ReactDOM.render(
             
            // JSX
            // Simple React function component named Hello, which returns a div
            // Also a peer component, no state here
            //<Hello />, 
            
            // HTML
            // Hello is a React element
            React.createElement(Hello, null), 
            
            document.getElementById('mountNode'),
          );
          ```
      - A componenr has to start with an uppercase letter, otherwise React will think we meant an HTML element: like React Element(function Button()) and HTML element (<button>)
   
  - **First React Hook**
    - https://jscomplete.com/playground/rgs1.2
    - First React Hook: useState() to manage a counter state
    - Example: a button, whose inner number increments by 1 on click
      ```
      function Button() {
        // To use a state object, React has a special function named useState()
        // a, b = useState()
        // a: state object (getter)
        // b: updater function (setter)
        // full syntax: const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
        
        // Using JS destructuring feature , to capture two variables in one line
        const [counter, setCounter] = useState(0);
        
        //JSX supports displaying dynamic expression if we place them within curly braces anywhwre inside JSX
        // return <button>{Math.random()}</button>;
      	
        // Define an onClick attribute on the button element
        // Receives a function reference
        // onClick={functionRef}, NOT invoke the function onClick={functionRef()}
        // return <button onClick={
        //   // Inline arrow function definition
        //   () => {
        //     console.log(Math.random());
        //   }
        // }>{counter}</button>;
        
        return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
      }
      
      ReactDOM.render(
        <Button />, 
        document.getElementById('mountNode'),
      );
      ```

  - **First One-wat Data Flow**
    - Format return value to make it more readable
      ```
      function Button() {
        const[counter, setCounter] = useState(0);
        // return () rather than {}: NOT return a obj, return a function call
        // React.createElement function call

        // official click handler function rather than inline function
        // NO () => setCounter(counter+1) directly
        const handleClick = () => setCounter(counter+1);

        return (
          <button onClick={handleClick}>
            {counter}
          </button>
        )
      }
      ```
    - One-way Data/Behaviour Flow
      ```
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
      ```
  - **Components Reusability**
    ```
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
    ```
