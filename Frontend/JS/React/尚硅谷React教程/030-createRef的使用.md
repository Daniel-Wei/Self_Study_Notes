### 030 createRef的使用

#### 1. 实例
  ```html

  //<!-- 引入props-types。用于对组件标签属性props进行限制 -->
  <script type="text/javascript" src ="../js/prop-types.js"></script>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>createRef的使用</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Demo extends React.Component {

      //React.createRef调用后可以返回一个容器。
      //该容器可以存储被ref所标识的节点。
      //该容器也是“专人专用”的，只能存储一个节点，标记为current。
      leftRef = React.createRef();
      rightRef = React.createRef();

      showLeft = ()=> {
        alert(this.leftRef.current.value);
      }

      showRight = ()=> {
        alert(this.leftRef.current.value);
      }

      render(){

        return(
          <div>
            <input ref={this.leftRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
            <button onClick={this.showInfo}>点我提示左侧的数据</button>&nbsp;
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
