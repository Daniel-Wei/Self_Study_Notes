### 016 解决类中this指向问题

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>解决类中this指向问题</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Weather extends React.Component {
      constructor(props){
        super(props);

        //初始化状态
        this.state = {isHot: true};

        //LHS: changeIsHotWeather是Weather实例对象的一个函数
        //RHS: changeIsHotWeather是Weather原型prototype上的函数
        //bind生成了新的函数 同时可以改变this的指向
        //解决changeIsHotState中的this指向问题
        this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
      }

      changeIsHotState(){
        //changeIsHotState放在了Weather的原型对象prototype上
        //通过Weather的实例调用changeIsHotState时，changeIsHotState中的this就是Weather实例。
      }


      render(){
        //读取状态
        const {isHot} = this.state;

        return <h1 onClick = {this.changeIsHotStateForInstance}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //this.changeIsHotState只是获取到了changeIsHotState这个方法本身
        //on click的时候，不是Weather的实例对象在调用changeIsHotState，是直接调用的。
        //由于类中方法默认开启了‘use strict’，这个时候changeIsHotState中的this是undefined
        return <h1 onClick = {this.changeIsHotState}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
  
        //只有Weather的实例可以调用changeIsHotState方法
        return <h1 onClick = {changeIsHotState}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));
    </script>

  </body>
  </html>
  ```

#### 2. bind实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>

  <body>
    <script type="text/javascript">
    function demo(){
      console.log(this);
    }

    demo();//Window

    const x = demo.bind({a: 1, b: 2});
    x(); // {a:1, b:2}
    
    </script>

  </body>
  </html>
  ```
