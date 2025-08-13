import { Component } from 'react';
import User from './ClassComponents/User';
import './App.css';

class App extends Component {
  render() {
    return <div className='app'>
      <User name= "Daniel Wei" age = {28} gender = "Male"/>
    </div>
  }
}



export default App;