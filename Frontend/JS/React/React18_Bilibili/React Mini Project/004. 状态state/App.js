import { useState } from 'react';
import './App.css';

function App() {

  // 在React中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
  // let counter = 1;
  
  // 要让组件可以受到变量变化的影响，必须在对变量修改后重新渲染组件
  // 这里我们就需要一个特殊变量 state：当这个变量被修改后，组件会重新渲染

  // state在React中进行了注册 React会监控state的变化
  // 当state发生变化的时候，会自动触发组件重新渲染

  // 在函数组件中，我们需要通过钩子函数来获取state：useState()
  
  // useState() 需要一个初始值作为参数
  // 并且会返回一个数组: [1, f]
  
  // 数组中的第一个元素：初始值
  // - 初始值只用来显示数据，直接修改不会触发组件的重新渲染
  
  // 数组中的第二个元素：函数
  // 通常会命名为setXxx
  // 用来修改state：调用其修改state后会触发组件的重新渲染
  // 并且使用函数中的值作为新的state的值

  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState({name: "Daniel Wei", age: 30});

  // 注意事项
  // 1. 只有state的值发生变化时，组件才会重新渲染
  // 2. 当state的值是一个对象时，修改state时使用新的对象去替换已有的对象
  // 3. 当通过setState去修改一个state时，并不表示修改当前的state
  //    - 修改的是组件下一次渲染时state的值
  // 4. setState()触发组件的重新渲染，是异步的：完成所有代码后，才依次setState
  //    - 所以当我们调用setState()需要用到旧的state的值时，可能会出现计算错误的情况

  const addHandler = () => {
    setTimeout(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
  }

  const minusHander = () => {
    // setState()触发组件的重新渲染，是异步的：完成所有代码后，才依次setState
    //    - 所以当我们调用setState()需要用到旧的state的值时，可能会出现计算错误的情况
    // 快速点击两下，渲染两次，但是最终只有-1，而不是-2
    setTimeout(() => {
      // setCounter(counter - 1);

      // 解决办法
      // setState()中回调函数的返回值将成为新的state值
      // 回调函数执行时，React会将最新的state值作为参数传递 (prevCounter)
      // setCounter((prevCounter) => {
      //   return prevCounter - 1;
      // });

      // 精简版
      setCounter(prevCounter => prevCounter - 1);
    }, 1000);
  }

  const addUserAgeHander = () => {
    
    // 直接修改不可行
    // object user是同一个内存地址reference
    // user.age += 1;

    // 浅复制对象
    // const updatedUser = Object.assign({}, user);
    // updatedUser.age++;
    // setUser(updatedUser);

    // 精简的浅复制语法
    setUser({...user, age: user.age + 1});
  }

  const minusUserAgeHander = () => {
     // 精简的浅复制语法
    setUser({...user, age: user.age - 1});
  }

  return <div className='app'>
    <h1>{counter}</h1>
    <button onClick={addHandler}>+</button>
    <button onClick={minusHander}>-</button>
    <p>{user.name} -- {user.age}</p>
    <button onClick={addUserAgeHander}>+</button>
    <button onClick={minusUserAgeHander}>-</button>

  </div>
}

export default App;