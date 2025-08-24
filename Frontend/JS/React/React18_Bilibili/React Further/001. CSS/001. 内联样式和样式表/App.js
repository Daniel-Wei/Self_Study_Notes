import { useState } from "react";
import './App.css';

const App = () => {
    const [paraBlueBorder, setParaBlueBorder] = useState(false);
    const btnOnClick = () => {
        setParaBlueBorder(prevParaBlueBorder => !prevParaBlueBorder);
    } 

    return <div>
        <p className={`para ${paraBlueBorder ? 'blueBorder': ''}`}>I am a paragraph</p>
        <button onClick={btnOnClick}>Click Me!</button>
    </div>
}

export default App;