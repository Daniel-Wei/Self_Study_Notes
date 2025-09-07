import { useEffect, useState } from "react";
import SubComponent from "./SubComponent";

function App() {
    
   const [count, setCount] = useState(0);
   console.log("App.js re-rendered");


    // 默认情况下，useEffect()中的参数函数，会在组件渲染结束后调用一次
    // 并且是每次渲染完成后都会调用一次
    // 结果：在点击btn多次后，{count}一直还是1

    // 第二个参数：array
    // 可以指定第一个参数函数的依赖项
    // 只用当依赖项发生变化的时候，第一个参数函数才会再次被触发
    
    // 通常会将第一个参数函数所有用到的变量都作为依赖项
    // 这样可以确保这些值发生变化时，都会触发第一个参数函数的再次执行

    // setCount()：由Hook function useState()生成的
    // useState()会确保组件的每次重新渲染都会获取到相同的setState()对象
    // 所以setState()方法可以不设置到依赖项中

    // 如果依赖项是空数组[],第一个参数函数只会在组件初始化渲染完成后执行一次
    // 之后再也不会执行

    // set count >= 0 all the time
    useEffect(() => {
      if(count < 0){
        setCount(_ => 0);
      }
    }, [count]);

    const onAddBtnClick = () => {
      setCount(prev => prev + 1);
    }

    const onMinusBtnClick = () => {
      setCount(prev => prev - 1);
    }

    return (
      <div>
        {count}
        <button onClick={onAddBtnClick}>+1</button>
        <button onClick={onMinusBtnClick}>-1</button>

        <SubComponent/>
      </div>
    );
}

export default App;
