### 025 函数式组件使用props

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

    //1. 创建函数式组件
    function Person(props){

        //解构赋值
        const{name, gender, age} = props;

        return(
            <ul>
              <li>姓名：{name}</li>
              <li>性别：{gender}</li>
              <li>年龄：{age}</li>
            </ul>
        )
    }

    -------------------------------------------------------------------------
    //对类式组件中的标签属性进行限制 (static -> Person.)

    //对标签属性props进行类型、必要性的限制
    Person.propTypes = {
      name:PropTypes.string.isRequired, //string类型 required
      gender:PropTypes.string, // string类型 optional
      age:PropTypes.number, // number类型 optional
      speak:PropTypes.func // Notice: NOT function
    }

    //对标签属性props配置默认default值
    Person.defaultProps = {
      gender: 'Male',
      age: 18
    }

    -------------------------------------------------------------------------
    
    //2. 渲染组件到页面
    const p1 = {name:'老刘', age:29, gender:'Male'};
    const p2 = {name:'Jerry', age:19, gender:'Male'};
    const p3 = {name:'Veronica', age:18, gender:'Female'};

    //ES6的拓展语法：数据中变量的名称必须和类式组件的props的名称保持一致
    //并不是进行了拷贝: {}只是React语法，实际上只有...p1，仅仅适用于标签属性的传递，展开了一个对象（JS原生环境中并不可行）
    ReactDOM.render(<Person {...p1}/>, document.getElementById('test'));

    ReactDOM.render(<Person {...p2}/>, document.getElementById('test2'));
    ReactDOM.render(<Person {...p3}/>, document.getElementById('test3'));

    </script>

  </body>
  </html>
  ```
