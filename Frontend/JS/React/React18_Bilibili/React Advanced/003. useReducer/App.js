import { useReducer } from "react";
import CountActionEnums from "./CountActionEnums";

// 为了避免reducer会重复创建，通常reducer会定义到组件的外部
const countReducer = ((prev, action) => {
        switch(action.type){
            case CountActionEnums.add:
              return prev + 1;
            case CountActionEnums.minus:
              return prev - 1;
            default:
              return prev;
        }
    }
);

function App() {
    const onAddBtnClick = () => {
        countDispatch({type: CountActionEnums.add});
    }

    const onMinusBtnClick = () => {
        countDispatch({type: CountActionEnums.minus});
    }

    // useReducer(reducer, initialArg, init)
    
    // 参数
    //  1. reducer：整合函数
    //      1.1 对于当前state的所有操作都应该在这个函数中定义
    //      1.2 该函数的返回值，会成为新的state的值
    //      1.3 参数：array[2]
    //          1.3.1: 当前最新的state值：prev
    //          1.3.2：action
    //              1.3.2.1 需要一个对象，在这个对象中会存储dispatch所发送的指令
    //              1.3.2.2 根据action.type来执行不同的操作
    //  2. initialArg：state的初始值，作用和useState()中的值是一样的
    //  3. init：

    // 返回值：array[2]
    //  1. state：用来获取state的值
    //  2. state修改的派发器
    //      2.1 通过派发器，可以发送操作state的命令
    //      2.2 具体的修改行为将会由另外一个函数执行
    const [count, countDispatch] = useReducer(countReducer, 1);

    return (
      <div style={{fontSize: 30, margin:'200px auto', textAlign:'center'}}>
        <button onClick={onMinusBtnClick} style={{fontSize: 30, marginRight: 30}}>-1</button>
        {count}
        <button onClick={onAddBtnClick} style={{fontSize: 30, marginLeft: 30}}>+1</button>
      </div>
    );
}

export default App;
