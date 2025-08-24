import { useState } from 'react';
import A from './A';
import classes from './App.module.css';

const App = () => {

    /*
     * CSS Module
        1. 使用步骤
            1. 创建一个xxx.module.css
            2. 在组件中引入module css: import classes from './App.module.css';
            3. 通过classes来设置类: className={classes.p1}
        2. CSS模块可以动态设置唯一的class值
    */

    const [paraBlueBorder, setParaBlueBorder] = useState(false);

    const onBtnClick = () => {
        setParaBlueBorder(prevParaBlueBorder => !prevParaBlueBorder);
    }

    return <div>
        <A/>
        <p className= {`${classes.p1} ${paraBlueBorder ? '' : classes.borderBlue}`}>I am a paragraph</p>
        <button onClick={onBtnClick}>Click Me!</button>
    </div>
}

export default App;