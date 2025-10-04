import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { useRef } from 'react';

let App = function Form() {
    const inputRef = useRef(null);
  
    function handleClick() {
        inputRef.current.focus();
    }
  
    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
              Focus the input
            </button>
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
