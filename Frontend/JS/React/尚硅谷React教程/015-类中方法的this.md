### 015 类中方法的this

#### 1. React
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>类中方法的this</title>
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

      changeIsHotState(){
        //changeIsHotState放在了Weather的原型对象prototype上
        //通过Weather的实例调用changeIsHotState时，changeIsHotState中的this就是Weather实例。

        console.log(this); 
      }

      render(){
        //读取状态
        const {isHot} = this.state;

        //this.changeIsHotState只是获取到了changeIsHotState这个方法本身
        //on click的时候，不是Weather的实例对象在调用changeIsHotState，是直接调用的。
        //由于类中方法默认开启了‘use strict’，这个时候changeIsHotState中的this是undefined
        return <h1 onClick = {this.changeIsHotState}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //只有Weather的实例可以调用changeIsHotState方法
        return <h1 onClick = {changeIsHotState}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        //React渲染时，赋值给onClick的是test()这个方法，不是test()方法的返回值。
        return <h1 onClick = {test}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>

        // static
        return <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
      }
    }

    //2. 渲染组件到页面
    ReactDom.render(<Weather/>, document.getElementById('test'));

    function test(){
      console.log('标题被点击了');

      //由于babel开启了严格模式 这里的this是undefined
      //如果没有‘use strict’，这里的this是Window
      console.log(this);
    }

    </script>

  </body>
  </html>
  ```

#### 2. 类中方法this的指向
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>类中方法的this</title>
  </head>

  <body>
    <script type="text/javascript">

    class Person {
      constructor(name, age){
        this.name = name;
        this.age = age;
      }

      speak(){
        //speak放在了哪里？-类的原型对象上，供实例使用
        //通过Person实例调用speak的时候，speak中的this就是Person实例 
        console.log(this);
      }
    }

    const p1 = new Person('Tom', 18);
    
    //通过实例调用speak方法
    //console会log这个实例对象 Person的instance
    p1.speak();

    const x = p1.speak; //只是获取到了speak方法本身
    x(); //方法的直接调用

    </script>

  </body>
  </html>
  ```
