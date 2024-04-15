### 002 Hello React 案例

#### 1. Hello.html
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>hello_react</title>
  </head>

  <body>
    <div id="test">
    </div>

    <!-- 引入react核心库 -->
    <script type = "text/javascript" src ="../js/react.development.js"></script>
    <!-- 引入react-dom，用于支持react操作DOM -->
    <script type = "text/javascript" src ="../js/react-dom.development.js"></script>
    <!-- 引入babel，用于将jsx转为js -->
    <script type = "text/javascript" src ="../js/babel.min.js"></script>

    <script type = "text/babel"> /* 此处一定要babel */
      //1. 创建虚拟DOM
      const vDOM = <h1>Hello, React</h1> /* 此处一定不要写引号，因为不是字符串 */
      //2. 渲染虚拟DOM到页面
      ReactDOM.render(VDOM, document.getElementById('test'));
    </script>

  </body>
  </html>
  ```
