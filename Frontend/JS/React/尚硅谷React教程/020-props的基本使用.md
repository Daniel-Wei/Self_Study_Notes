### 020 props的基本使用

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>props的基本使用</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Person extends React.Component {

      //解构赋值
      const{name,age,gender} = this.props;
      
      render(){
        <ul>
          <li>姓名：{name}</li>
          <li>性别：{gender}</li>
          <li>年龄：{age}</li>
        </ul>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Person name="Tom" gender="Female" age="18"/>, document.getElementById('test'));
    ReactDom.render(<Person name="老刘" gender="Male" age="30"/>, document.getElementById('test2'));
    </script>

  </body>
  </html>
  ```
