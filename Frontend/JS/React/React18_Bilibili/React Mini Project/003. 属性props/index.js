import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { unescapeLeadingUnderscores } from 'typescript';
/*
  src/index.js是js的入口文件
*/


// 创建一个JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
const logData = [
  {
     id: 675,
     description: "Study React",
     minutes: 435,
     date: new Date(),
  },
  {
     id: 46234,
     description: "Leetcode",
     minutes: 176,
     date: new Date(),
  },
  {
     id: 4235788,
     description: "Workouts",
     minutes: 73,
     date: new Date(),
  }
]
root.render(<App logData = {logData}/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
