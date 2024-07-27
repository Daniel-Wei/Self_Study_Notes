### 024 类式组件中的构造器和props

#### 1. 实例
  ```html

  //<!-- 引入props-types。用于对组件标签属性props进行限制 -->
  <script type="text/javascript" src ="../js/prop-types.js"></script>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>类式组件中的构造器和props</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Person extends React.Component {

      -------------------------------------------------------------------------
      // 通常，在React中，constructor仅仅用于以下两种情况：
      // 1. 通过给this.state赋值对象来初始化内部state
      // 2 为事件处理绑定实例

      // 在React组件挂载之前，会调用它的构造函数。
      // 在为React.Component子类实现构造函数的时候，应该在其他语句之前调用super(props)。
      // 否则，this.props在构造函数中可能会出现未定义undefined的bug

      constructor(props){

        //构造器是否接受props，是否传递给super
        //取决于：是否希望在构造器中通过this访问props
        super(props);

        //1. 初始化状态
        this.state = {isHot: true};

        //2. 为事件处理绑定实例
        this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
      }

      -------------------------------------------------------------------------
      //static: 是对类自身的props了进行了限制和配置

      //对标签属性props进行类型、必要性的限制
      static propTypes = {
        name:PropTypes.string.isRequired, //string类型 required
        gender:PropTypes.string, // string类型 optional
        age:PropTypes.number, // number类型 optional
        speak:PropTypes.func // Notice: NOT function
      }
  
      //对标签属性props配置默认default值
      static defaultProps = {
        gender: 'Male',
        age: 18
      }

      -------------------------------------------------------------------------

      render(){
        //解构赋值
        const{name,age,gender} = this.props;
  
        //props is read-only
        // Cannot assign to read only property 'name' of object '#<Object>'
        this.props.name = 'Jack';

        return(
          <ul>
            <li>姓名：{name}</li>
            <li>性别：{gender}</li>
            <li>年龄：{age}</li>
          </ul>
        )
      }
    }

    //2. 渲染组件到页面
    const p1 = {name:'老刘', age:29, gender:'Male'};
    const p2 = {name:'Jerry', age:19, gender:'Male'};
    const p3 = {name:'Veronica', age:18, gender:'Female'};


    // age 如果想传递成数字类型 需要改为 age={19}
    ReactDOM.render(<Person name="Herry", age="19", gender="Male"/>, document.getElementById('test'));

    ReactDOM.render(<Person name={p1.name}, age={p1.age}, gender={p1.gender}/>, document.getElementById('test'));

    //ES6的拓展语法：数据中变量的名称必须和类式组件的props的名称保持一致
    //并不是进行了拷贝: {}只是React语法，实际上只有...p1，仅仅适用于标签属性的传递，展开了一个对象（JS原生环境中并不可行）
    ReactDOM.render(<Person {...p1}/>, document.getElementById('test'));

    ReactDOM.render(<Person {...p2}/>, document.getElementById('test2'));
    ReactDOM.render(<Person {...p3}/>, document.getElementById('test3'));

    </script>

  </body>
  </html>
  ```
