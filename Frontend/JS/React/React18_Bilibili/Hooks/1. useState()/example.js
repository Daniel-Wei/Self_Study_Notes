import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

let App = function Counter() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
        setCount(count + 1);
    }
  
    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
