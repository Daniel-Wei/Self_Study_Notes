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


    //3. 事件委托和冒泡

    /*
      由于 React 使用了事件委托，这使得在动态创建和销毁元素时，事件处理效率更高。
      如果没有事件委托，每次创建一个新元素时，你都需要为它添加一个新的事件监听器。
      同样，在销毁元素时，你需要手动移除事件监听器，以避免内存泄漏。
      而使用事件委托，React 可以处理所有这些问题，同时提高应用程序的性能。

      在这个例子中，我们将 onClick 事件处理器添加到了父级 <div> 元素。
      无论我们点击哪个按钮，都会触发 handleClick 函数。
      这是一个简单的事件委托示例，展示了如何在 React 中利用事件冒泡来优化事件处理。
    */

    class App extends Component {
      handleClick = (event) => {
        alert(`Clicked on: ${event.target.textContent}`);
      }
    
      render() {
        return (
          <div onClick={this.handleClick}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        );
      }
    }


    </script>

  </body>
  </html>
  ```
