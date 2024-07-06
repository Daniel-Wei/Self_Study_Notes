### 014 React中的事件绑定

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React中的事件绑定</title>
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
        //读取状态
        const {isHot} = this.state;

        //JS原生语句
        //React的event handler property是onClick
        return <h1 onclick = "test()">今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //Expected 'onClick' listener to be a function, instead got a value of 'string' type
        return <h1 onClick = "test()">今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //React渲染时，赋值给onClick的是test()的返回值，就会执行console.log()
        //而且因为test()的返回值是undefined，后续on click不会再有console.log()
        return <h1 onClick = {test()}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //React渲染时，赋值给onClick的是test()这个方法，不是test()方法的返回值。
        return <h1 onClick = {test}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //static
        return <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));

    function test(){
      console.log('标题被点击了');
    }

    </script>

  </body>
  </html>
  ```
