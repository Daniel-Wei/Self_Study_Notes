### 004 虚拟DOM与真实DOM

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>虚拟DOM与真实DOM</title>
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
      const vDOM = (
        <h1 id="title">
          <span>Hello, React</span> /* 此处一定不要写引号，因为不是字符串 */
        </h1> 
      )

      //2. 渲染虚拟DOM到页面
      ReactDOM.render(VDOM, document.getElementById('test'));

      //3. console.log 虚拟和真实DOM
      console.log('Virtual DOM', vDOM); //Object

      const tDOM = document.getElementById('test');
      console.log('True DOM', tDOM); //<div id="test"></div>
    </script>

  </body>
  </html>
  ```

#### 2. 关于虚拟DOM 
  - 本质是Object类型的对象（一般对象）
  - 虚拟DOM比较轻，真实DOM比较重。因为虚拟DOM是React内部在用，无需真实DOM上所有的属性。
  - 虚拟DOM最终会被React转化成真实DOM，呈现在页面上。
