### 013 初始化state

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>初始化state</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Weather extends React.Component {
      constructor(props){
        super(props);

        //初始化状态
        this.state = {isHot: true};
      }

      render(){
        //读取状态；es6的解构赋值
        //用于从对象中提取属性并将其赋值给一个变量
        //{}中的部分表示我们想从对象中提取哪些属性
        const {isHot} = this.state;
        return <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));

    </script>

  </body>
  </html>
  ```
