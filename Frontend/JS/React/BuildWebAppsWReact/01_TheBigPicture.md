### React: The Big Picture

#### 1. Why React
  - Flexibility
    - Libray, not a framework (Augular, Ember etc)

    - Where can I use React?
      - Web Apps
      - Generate static stites w React using tools like Gatsby and Phenomic
      - Build truly native mobile applications using React Native
      - Create installable desktop apps w tools like Electron
      - React also supports server rendering out of the box, popular frameworks like Next.js, make it really easy to set up
      - Create virtual reality websites and 360 experiences w React VR

    - React Renderers
      - React is highly versatile(万用的) because the rendr is separate from itself
      - For web apps, call react-dom to render components to HTML
      - For React Native, use react-native to render React components into native-friendly code
      - React VR is useful for rendering React components into a VR environment
      - Server-side Rendering:
        - ReactDomServer.renderToString(), useful when want to render React components on the server
        - Libraries: Next.js, Gatsby, Phenomic
  
  - Developer Experience
    - Small & Logical API
    - HelloWorld
      ```
      import React from 'react';

      class HelloWorld extends React.Component {
        render() {
          return <div>Hello {props.name}</div>
        }
      }
      ```
      - render(): JSX - looks like HTML, but it's sitting in a JavaScript file
      - JSX compiles to JS
        ```
        <h1 color="red">Heading here</h1>
        ==>
        React.createElement("h1", {color: "red"}, "Heading here")

      - The JSX above compiles down to this. The plain JS is sent to the browser. The call to createElement generates HTML.
      - React.createElement("name of the tag", {object that specifies the attributes}, "markup should sit inside")
    - Traditional libraries like Angular and Vue seek to enhance the power of HTML by inventing their own syntax for simple operations like looping
      - Angular
        ```
        <div *ngFor="let user of users">
      - Vue
        ```
        <div v-for="user in users">
    - React just handles HTML w JS
      ``
      {users.map(createUser)} //JS built-in function 'map'
    - Tradtional libraries put fake JS in HTML, and React put fake HTML in JS
  - Corporate Investment
    - When breaking changes occur in React, FB has consistently provided a codemod that automates the change
    - A codemod is a command line tool: easily resolve breaking changes by running a script
  - Community Support
  
  - Performance
    - Why Virtual DOM
      - JS is fast, but updating the DOM is expensive
      - React minimizes DOM changes
      - Before React, most libraries would blindly update DOM ro reflect the new state, which often lead to redrawing a significant portion of the page, even when only a minor change had occurred.
      - In contrast, React monitors the values of each component state
        - It helps avoid layout thrashing, which is when a browser has to recalculate the position of everything when a DOM elements changes.
        - Saves battery and CPU.
        - Enables simple programming model
  
  - Testability
    - Tradtional UI Tests
      - Hassle(麻烦) to set up
      - Requireds browser
      - Slow
      - Brittle(易碎的) Integration Tests
      - Time-consuming to write or maintain
     
    - React
      - Little to no config required
      - Run in-memory via Node
      - Fast
      - Reliable, Deterministic Unit Tests
      - Write quickly, update easily

#### 2. Tradeoffs
  - Framework vs. Library
    - Frameworks(Angular):
      - Clear opinions
      - Less decision fatigue
      - Less setup overhead
      - More cross-team consistency

    - Library(React):
      - Light-weight
      - Spinkle(少量) on existing apps: FB slowly replaced their PHP app w React
      - Pick what you need
      - Free to choose best tech
      - Popular boilerplates(样板) exist
  
  - Concise vs. Explicit
    - React trades conciseness for predictability and explicitness
    - Two-way Binding:
        - Avoid typing by automatically keeping form inputs in sync w the underlying data
        - Less coding
        - JS values and inputs are automatically kepy in sync.
        ```
        let user = 'Cory';
  
        <input type="text" value={user} />
    - One-way Binding(React)
      ```
      state = { user: 'Cory' }

      function handleChange(event){
        this.setState({
          user: event.target.value; // Explicit change handler
        });
      }

       <input type="text" value={this.state.user} onChange={this.handleChange} />
      ```
      - More control as can declare precisely what should happen on every event, which means can transform and validate input before updating state, and perform performance optimizations as desired.
      - Easy to debug
      
  - Template-centric vs. JS-centric
    - Template-centric: Angular, Vue
      - seek to make HTML more powerful by inventing their own unique syntax for writing code in HTML
      - Example: if true then display
      ``` 
      <h1 *ngIf="isAdmin">Hi Admin</h1> //Angular
  
      <h1 v-if="isAdmin">Hi Admin</h1> //Vue
      ```
      - Example: Loop logic
      ```
      <div *ngFor="let user of users">{{user.name}}</div> //Angular

      <div v-for="user in users">{{user.name}}</div> //Vue
      
     
    - JS-centric: React
      - Utilizes the power of JS to handle HTML
      - Since plain JS, we get: Autocomplete support + Error messages
      - Example: if true then display
      ```
      {isAdmin && <h1>Hi Admin</h1>}
      ```
      - Example: Loop
      ```
      users.map(user => <div>{user.name}</div>)
      ```
     
  
  - Seperate vs. Single File
  
  - Standard vs. Non-standard
  - Community vs. Corporate

#### 3. Why NOT React?
