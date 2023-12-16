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
  - Community Support
  - Performance
  - Testability
