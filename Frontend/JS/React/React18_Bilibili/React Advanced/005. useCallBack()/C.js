import React, { useState } from "react";

function C({ onBPlusOneClick }) {
    console.log("C rendered");
    const [count, setCount] = useState(1);
    const onClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div style={{justifyContent: "center", display: "flex", alignItems: "anchor-center"}}>
            <h2>App -- {count}</h2>
            <button style={{marginLeft: "20px", height: "40px", width: "80px"}} onClick={onClick}>+1</button>
            <button style={{marginLeft: "20px", height: "40px", width: "80px"}} onClick={onBPlusOneClick}>+ in B</button>
        </div>
    )
}

export default React.memo(C);
