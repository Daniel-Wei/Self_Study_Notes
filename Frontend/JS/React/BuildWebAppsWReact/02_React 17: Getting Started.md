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
