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
        this.state = {isHot: true};
      }

      render(){ 
        return <h1>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));

    </script>

  </body>
  </html>
  ```
