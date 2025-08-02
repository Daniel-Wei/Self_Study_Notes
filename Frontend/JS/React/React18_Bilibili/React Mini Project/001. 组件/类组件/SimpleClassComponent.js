import React from "react";

class SimpleClassComponent extends React.Component{

    // 类组件中必须要添加一个render() 方法
    // render()方法的返回值必须是一个JSX

    render() {
        return <div>我是一个简单的类组件</div>
    }
}

export default SimpleClassComponent;
