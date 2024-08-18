### 032 React中的事件处理

#### 1. 实例
  ```html

  //<!-- 引入props-types。用于对组件标签属性props进行限制 -->
  <script type="text/javascript" src ="../js/prop-types.js"></script>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React中的事件处理</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Demo extends React.Component {

      /*
        1. 通过onXxx属性指定事件处理函数（注意大小写）
           - React使用的是自定义（合成）事件，而不是使用的原生DOM事件 - onclick -> OnClick，为了更好的兼容性
           - React中的事件，是通过事件委托方式处理的（委托给组件最外层的元素） - <button> onClick 委托给 <div> -> 为了高效

        2. 通过event.target得到发生事件的DOM元素对象：不要过度使用ref
      */

      //React.createRef调用后可以返回一个容器。
      leftRef = React.createRef();
      rightRef = React.createRef();

      showLeft = ()=> {
        alert(this.leftRef.current.value);
      }

      // 发生事件和需要操作的DOM是同一个：不需要ref
      // ref={this.rightRef} 可以删除
      showRight = (e)=> {
        alert(e.target.value);
      }

      render(){

        return(
          <div>
            <input ref={this.leftRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
            <button onClick={this.showLeft}>点我提示左侧的数据</button>&nbsp;
            <input ref={this.rightRef} onBlur={this.showRight} type"text" placeholder="失去焦点提示数据"/>
          </div>
        )
      }
    }

    //2. 渲染组件到页面
    ReactDOM.render(<Demo/>, document.getElementById('test'));

    </script>

  </body>
  </html>
  ```
