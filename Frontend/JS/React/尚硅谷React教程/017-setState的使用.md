### 017 setState的使用

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>setState的使用</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Weather extends React.Component {

      //构造器就调用了一次：只有id为test的DOM调用了这个类式组件
      constructor(props){
        super(props);

        //初始化状态
        this.state = {isHot: true, wind: '微风'};

        //LHS: changeIsHotWeather是Weather实例对象的一个函数
        //RHS: changeIsHotWeather是Weather原型prototype上的函数
        //bind生成了新的函数 同时可以改变this的指向
        //解决changeIsHotState中的this指向问题
        this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
      }

      //changeIsHotState调用几次：on click几次调用几次
      changeIsHotState(){
        //changeIsHotState放在了Weather的原型对象prototype上
        //通过Weather的实例调用changeIsHotState时，changeIsHotState中的this就是Weather实例。

        //获取原来的isHot值
        const {isHot} = this.state;

        //严重注意⚠️：状态（state）不可以直接更改
        this.state.isHot = !isHot;
        console.log(this.state.isHot);//依然会显示成更改了

        //状态必须通过setState进行更改, 并且更新是一种合并，不是完全替换
        //state.wind不会被更改
        this.setState({isHot: !isHot});
      }

      //render调用了1 + n次：1是初始化的那次 使用initial state
      //n是状态更新的次数：每次state有所改变 就会重新render一次
      render(){
        //读取状态
        const {isHot, wind} = this.state;

        return <h1 onClick = {this.changeIsHotStateForInstance}>今天天气很{isHot ? '炎热' : '凉爽', {wind}}</h1>

        //this.changeIsHotState只是获取到了changeIsHotState这个方法本身
        //on click的时候，不是Weather的实例对象在调用changeIsHotState，是直接调用的。
        //由于类中方法默认开启了‘use strict’，这个时候changeIsHotState中的this是undefined
        return <h1 onClick = {this.changeIsHotState}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));
    </script>

  </body>
  </html>
  ```
