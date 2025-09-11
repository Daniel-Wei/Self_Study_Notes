import { useState } from "react";
import B from "./B";

function A() {
    console.log("A rendered");
    const [count, setCount] = useState(1);
   
    const onClick = () => {
        // without 'React.memo'
        // console would also print "B rendered" & "C rendered"
        // re-render parent components will also trigger re-rendering children components
        setCount(prev => prev + 1);
    }

    const dividedByFour = count % 4 == 0;

    return (
        <>
            <div style={{justifyContent: "center", display: "flex", alignItems: "anchor-center"}}>
                <h2>App -- {count}</h2>
                <button style={{marginLeft: "20px", height: "40px", width: "80px"}} onClick={onClick}>+1</button>
            
            </div>

            {/* Component is only re-rendered when value of dividedByFour updated */}
            <B dividedByFour = { dividedByFour}/>
        </>
       

    )
}

export default A;
