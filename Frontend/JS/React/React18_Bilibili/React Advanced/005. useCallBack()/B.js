import React, { useCallback, useState } from "react";
import C from "./C";

function B() {
    console.log("B rendered");
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(1);
    
    /*
        useCallBack创建的回调函数，不会总在组件重新渲染时重新创建

        参数
        1. 回调函数
        2. 依赖数组
            - 当依赖数组发生变化时，回调函数才会重新创建
            - 如果不指定依赖数组，组件每次重新渲染时，函数都会重新创建
            - 不需要任何依赖时，指定依赖数组为[]
        
        1. 当C组件trigger onBPlusOneClick的时候，B组件重新渲染了
        2. 由于使用了callBack，onBPlusOneClick不会再次创建(dependencies: [])
        3. C组件的props没有发生变化
        4. React.memo(C)的缓存功能就不会重新渲染C组件
    */
    const onClick = useCallback(() => {
        setCount(prev => prev + num);
        // 没有把num添加到依赖项里的时候，每次都是+1
        // 因为onClick()只在组件B初始渲染时定义了一次，作用域里的num就是1
        setNum(prev => prev + 1);

        // 添加了之后，由于num发生了变化，B每次的重新渲染都会重新定义onClick
        // 因此每次C也会重新渲染
    }, [num]);

    return (
        <>
            <div style={{justifyContent: "center", display: "flex", alignItems: "anchor-center"}}>
                <h2>App -- {count}</h2>
                <button style={{marginLeft: "20px", height: "40px", width: "80px"}} onClick={onClick}>+</button>
            </div>

            <C onBPlusOneClick={ onClick }/>
        </>
    )
}

/*
    React.memo是一个高阶组件:
        - 接收另一个组件作为参数
        - 返回一个包装过的新组件
        - 包装过的新组件就会具备缓存功能
            - 只有props发生变化时，才会触发新组件的重新渲染
            - 父类组件的重新渲染不会直接触发新组件的重新渲染
            - 否则总是返回缓存中的组件
*/

export default React.memo(B);
