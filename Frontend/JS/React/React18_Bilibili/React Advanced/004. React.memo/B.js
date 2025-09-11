import React, { useState } from "react";
import C from "./C";

function B( { dividedByFour } ) {
    console.log("B rendered");
    const [count, setCount] = useState(1);
    const onClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <div style={{justifyContent: "center", display: "flex", alignItems: "anchor-center"}}>
                <h2>App -- {count}</h2>
                <button style={{marginLeft: "20px", height: "40px", width: "80px"}} onClick={onClick}>+1</button>
            
            </div>

            <C/>
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
