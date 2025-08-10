import { useRef, useState } from 'react';
import './App.css';

let tempOwn;
let tempReact;

function App() {
  const [counter, setCounter] = useState(0);
  
  const h1Ref = useRef(); 
  const ownH1Ref = {current: null};
  
  // 我们创建的js对象，在组件重新渲染的时候会再次重新创建
  // useRef()创建的对象，可以确保每次组件渲染获取到的都是同一个对象
  console.log(tempOwn === ownH1Ref); // false
  console.log(tempReact === h1Ref); // true
  
  tempReact = h1Ref;
  tempOwn = ownH1Ref;

  // 获取原生DOM对象
  // 1. 使用传统的document.get来对DOM进行操作
  // 2. 直接从React中获取DOMduix
  //    - 1. 创建一个存储DOM对象的容器：useRef()钩子函数
  //    - 2. 将容器设置为想要获取的DOM对象元素的ref属性

  // 钩子函数的注意事项
  // 1. React中钩子函数只能用于函数组件或自定义钩子
  // 2. React中钩子函数只能直接在函数组件中调用（不能在函数组件中定义的方法中使用）

  // useRef()
  // - 返回的就是一个普通的JS对象: {current: undefined}
  // - 所以我们直接创建一个js对象，也可以代替useRef()
  // - 区别：
  //      - 我们创建的js对象，在组件重新渲染的时候会再次重新创建
  //      - useRef()创建的对象，可以确保每次组件渲染获取到的都是同一个对象
  // 所以，当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()


  const addHandler = () => {
    // React Hook "useRef" is called in function "onClickHander" that is neither a React function component nor a custom React Hook function. 
    // const h1Ref = useRef();

    // true
    // console.log(h1Ref.current === document.getElementById("h1Header"));

    setCounter(prevCounter => prevCounter + 1);
    h1Ref.current.innerText = '124';
  }

  return <div className='app'>
    <h1 id='h1Header' ref={h1Ref}>{counter}</h1>
    <button onClick={addHandler}>+</button>
    <button>-</button>
  </div>
}

export default App;