import { useEffect, useState } from "react";
import SubComponent from "./SubComponent";

function App() {
    
   const [count, setCount] = useState(0);
   console.log("App.js re-rendered");


    // useEffect()是一个钩子函数：需要一个函数作为参数
    // 作为参数的函数：会在组件渲染完毕后执行
    // 在开发中，可以将会产生副作用的代码编写到useEffect()的回调函数中，避免影响组件的渲染
    useEffect(() => {
      // 避免了setState()在渲染阶段不比较state前后值就进行组件重新渲染的问题
      // {count} 会在App渲染结束后，更新为1，再次触发App的渲染

      // “App.js re-rendered” is printed on console 3 times
      //  1. Initial render
      //  2. Triggered by setCount(1) after 1
      //  3, React re-render, no actual impact

      // "sub component re-rendered" is printed on console 2 times
      //  1. Initial render
      //  2. Triggered by setCount(1) after 1
      //  No 3: as React re-render no actual impact
      setCount(1);
    });

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
