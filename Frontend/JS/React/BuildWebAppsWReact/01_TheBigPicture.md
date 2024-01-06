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
        ```
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
      ```
      - Example: Event
      ```
      <button (click)="delete()">Delete</button> //Anugular
      <button v-on:click="delete">Delete</button> //Vue
      ```
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
      - Example: Event
      ```
      <button onClick={delete}>Delete</button>
      ```
    - Benefits
      - Template-centric
        - Little JS knowledge required
        - Avoid confusion w JS binding
        - Rule of least power
      - JS-centric
        - Little framework-specific syntax
        - Fewer concepts to learn. It's JS
        - Less code
        - Easy to read & debug
        - Encourage improving JS skills
     
  - Seperate vs. Single File
    - MVC: Model(JS) + View(HTML) + Controller(JS)
      - Separate technologies, but intertwined concerns
      - Handling intertwined concerns in separate files can actually hinder debugging and slows feedback
    - React: Component(JS & JSX)
      - Each component stands on its own and can be composed w other components to build rich & complex UIs
      - Markup and logic are colocated in the same file
      - Each component is a separate concern: embed logic, styling and markup concerns, as JS, CSS and JSX work together to create a useful component
      - Nested Components
  
  - Standard vs. Non-standard
    - Web Component Standard
      - Four Core Technologies
        - Templates: inert, reusable markup
        - Custom Elements: define own elements
        - Shadow DOM: Encapsulated styling
        - Imports: Bundle HTML, JS & CSS
      - Spotty Browser support: polyfills required
      - Not enable anything new
      - JS libraries keep innovating
      - Only run in the browser

    - Non-standard: Angular, Vue, React
      - Faster innovation
      - Strong user and developer experience
      - Broad browser support

    - Compare
      - Web Components - Templates; React - JSX, JS
      - Web Components - Custom Elements; React - Declate React components
      - Web Components - Shadow Dom; React - CSS modules, CSS in JS, "inline"
      - Web Components - Imports; React - One component per file
    
  - Community vs. Corporate
    - Corporate Backed
      - React, driven by FB's needs
      - Full-time development staff

#### 3. Why NOT React?
  - HTML and JSX Differ
    - Differences
      - HTML: for, class, <style color="blue">, <!-- Comment -->
      - JSX: htmlFor, className, <style={{color:'blue'}}>, {*/ Comment /*}
    - Convert HTML to JSX
      - find/replace
      - Online Compiler
        HTML:
        ```
        <!-- HTML Comment -->
        <div class="awesome" style="border: 1px solid red">
          <label for="name">Enter your name: </label>
        </div>
        ```
        JSX:
        ```
        {/* HTML Comment */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
        </div>
      - htmltojsx on npm
  
  - Build Step Required
    - Modern Web Apps
      - Minify: To save bandwidth
      - Transpile(转译): so can use modern JS features today, even before own platform offers full support
      - Test and Lint(检查去除可能的问题)
    - Popular Transpilers Compile JSX: Babel, TypeScript
      - Both allows to use modern JS features today, even before all browsers offer full support
     
    - A variety of React boilerplates(模版样板文件)
      - create-react-app
        - also minifies and bundles code, and even includes automated testing support, so we do not even need to configure own development or production build environment to work with JSX.
      
  - Potential Version Conflicits
    - Can NOT run two versions of React at the same time on the same page: need to keep React components on the same version for a given page
    - Build Standardized Web Components
      - do not have to worry about version conflicts at all since there is no runtime
      - Standard web components just leverage the support that is build right into the browser
  
  - Outdated Resources Online
    - Features Extracted from React Core
      - Old
        ```
        import {render} from 'react';

        React.createClass

        import {PropTypes} from 'react';

        mixins: [mixinNameHere]
        ```

      - New
        ```
        // Since React is used more than Web now, React DOM was extracted to a separate package
        import {render} from 'react-dom';

        //Since most people are using ES classes today, React.creareClass was extracted to a separate library called create-react-class
        // Need to reference this separate library if want to declare React components using the createClass style
        var crc = require('create-react-class')

        // Since only some teams choose to use PropTypes over alternatives like TS and Flow, the prop-types library was extracted to a separate npm package too
        import PropTypes from 'prop-types';

        //mix-ins were initially a popular way to share functionalities between components in React. However, mix-ins are no longer part of React Core. Today, React's Hooks are the most popular to share logic across components.
        Hooks
        ```
  
  - Design Fatigue
  - Next Steps
