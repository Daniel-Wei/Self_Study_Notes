import { useState } from "react";
import SubComponent from "./SubComponent";

function App() {
    
   const [count, setCount] = useState(0);
  
    // print on console twice
    // React.StrictMode -> double invoking
    console.log('App.js rendered');

    // too many re-renders
    // 当我们直接在函数体中调用setState时，就会触发too many re-renders
    
    // 问题：但是当新旧的state值相同时，不是不会触发组件的重新渲染？
    
    // 函数组件中setState的执行流程
    // 1. setCount() --> dispatchSetDate()
    // 2. dispatchSetDate()
    //    2.1 先判断，组件当前处于什么阶段：渲染阶段/非渲染阶段
    //    2.2 渲染阶段
    //        - 不会检查state值是否相同 -> 挂载组件到渲染队列上 -> 触发组件的重新渲染
    //        - 函数体中的setCount()导致了too many re-renders
    //    2.2 非渲染阶段，
    //        - 会检查state值是否相同 -> 只有state值发生变化时，才会挂载组件到渲染队列上，触发组件的重新渲染
    //        - onBtnClick中的setCount工作正常: 
    //            - no initial re-render
    //            - re-render TWICE on clicked
    //            - Why TWICE?
    //              - first: count state的值 0 -> 1, App和SubComponent都被重新渲染
    //              - second: count state的值 1 -> 1，App又被重新渲染，SubComponent没有被重新渲染
    //                  - state的值前后相同时，React会继续执行当前组件的渲染：通常发生在state值第一次前后相同时
    //                  - 但是这次渲染不会触发子组件的渲染，并没有实际效果


    // setCount(0);

    const onBtnClick = () => {
      setCount(1);
    }
  
    return (
      <div>
        {count}
        <button onClick={onBtnClick}>+1</button>
        <SubComponent/>
      </div>
    );
}

export default App;
