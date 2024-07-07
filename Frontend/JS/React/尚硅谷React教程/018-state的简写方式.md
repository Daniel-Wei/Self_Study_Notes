### 018 state的简写方式

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>state的简写方式</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Weather extends React.Component {

      constructor(props){
        super(props);

        this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
      }

      //类中可以直接写赋值语句
      //定义了instance的公共通用属性
      state = {isHot: true, wind: '微风'};

      //需要在构造器里bind this：this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
      changeIsHotState(){
        const {isHot} = this.state;
        this.setState({isHot: !isHot});
      }

      ----------------------------------------------------------------------------

      //直接将changeIsHotStateForInstance变成了一个指向一个方法，instance的一个公共通用属性
      //无需再在constructor中再次定义这个instance的公共通用属性了

      //然而仍然缺少bind this
      changeIsHotStateForInstance = function(){
        const {isHot} = this.state;
        this.setState({isHot: !isHot});
      }

      ----------------------------------------------------------------------------

      //直接讲changeIsHotStateForInstance变成了一个指向一个方法，instance的一个公共通用属性
      //无需再在constructor中再次定义这个instance的公共通用属性了

      //箭头函数没有自己的this，会寻找函数外部的this，也就是Weather的实例对象instance
      changeIsHotStateForInstance = ()=> {
        const {isHot} = this.state;
        this.setState({isHot: !isHot});
      }

      ----------------------------------------------------------------------------

      render(){
        const {isHot, wind} = this.state;

        return <h1 onClick = {this.changeIsHotStateForInstance}>今天天气很{isHot ? '炎热' : '凉爽', {wind}}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));
    </script>

  </body>
  </html>
  ```

#### 2. 类中直接写赋值语句
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>state的简写方式</title>
  </head>

  <body>
    <script type="text/javascript">

    class Car{
      constructot(name, price){
        this.name = name;
        this.price = price;
      }

      //类中可以直接写赋值语句
      //如下代码的含义是：给Car的实例对象instance，添加一个属性，名为a，值为1。
      a = 1;
      wheel = 4;
    }

    const c1 = new Car('Mercedes', 199);
    console.log(c1); //依然有a和wheel属性

    </script>

  </body>
  </html>
  ```

#### 3. 实例简写的最终版本
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>state的简写方式</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Weather extends React.Component {

      //类中可以直接写赋值语句
      //定义了instance的公共通用属性
      state = {isHot: true, wind: '微风'};

      //自定义方法-要用赋值语句的形式 + 箭头函数
      changeIsHotStateForInstance = ()=> {
        const {isHot} = this.state;
        this.setState({isHot: !isHot});
      }

      render(){
        const {isHot, wind} = this.state;
        return <h1 onClick = {this.changeIsHotStateForInstance}>今天天气很{isHot ? '炎热' : '凉爽', {wind}}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));
    </script>

  </body>
  </html>
  ```
