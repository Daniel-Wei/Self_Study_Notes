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
  - Corporate Investment
  - Community Support
  - Performance
  - Testability
