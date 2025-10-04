### Hook Summary

- 1. useState()
  ```js
  import React, { useState } from "react";
 
  const ComponentUseState = () => {
    const [num, setNum] = useState(0);
   
    return (
      <div>
        <h2>Using useState</h2>
        Number: {num}
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div>
    );
  };
   
  export default ComponentUseState;
  ```
