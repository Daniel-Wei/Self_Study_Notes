### 021 批量传递props

#### 1. 实例
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>批量传递props</title>
  </head>

  <body>
    <script type="text/javascript">

    //1. 创建类式组件
    class Person extends React.Component {
      
      render(){

        //解构赋值
        const{name,age,gender} = this.props;

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
    const p1 = {name:'老刘', age:18, gender:'Female'};

    ReactDOM.render(<Person name={p1.name}, age={p1.age}, gender={p1.gender}/>, document.getElementById('test'));
    //ES6的拓展语法：数据中变量的名称必须和类式组件的props的名称保持一致
    //并不是进行了拷贝: {}只是React语法，实际上只有...p1，仅仅适用于标签属性的传递，展开了一个对象（JS原生环境中并不可行）
    ReactDOM.render(<Person {...p1}/>, document.getElementById('test'));
    
   
    </script>

  </body>
  </html>
  ```

#### 2. 展开运算符
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>展开运算符</title>
  </head>

  <body>
    <script type="text/javascript">

    let arr1 = [1,3,5,7,9];
    let arr2 = [2,4,6,8,10];

    console.log(arr1);//[1,3,5,7,9]
    console.log(...arr1)://展开一个数组：1 3 5 7 9

    let arr3 = [...arr1, ...arr2];
    console.log(arr3); //连接数组：[1,3,5,7,9,2,4,6,8,10]

    //传递可变数组为参数
    function sum(...numbers){
      console.log(numbers);
    }
    sum(1, 2, 3, 4, 5); //[1,2,3,4,5]

    //在函数中使用
    function sum2(...numbers){
      return numbers.reduce((prevVal, currVal) => {
        return prevVal + currVal;
      })
    }
    console.log(sum2(1, 2, 3, 4, 5)); //15

    let person = {name:'Tom', age:18};

    //Uncaught TypeError: Found non-callable @@iterator
    //三点展开运算符没有办法直接展开一个对象
    console.log(...person);

    //构建字面量对象时使用展开语法
    let person2 = {...person};
    person2.name = 'Daniel';
    console.log(person.name); //Tom
    console.log(person2.name); //Daniel

    //复制对象的同时合并了属性：更改已有属性，添加新的属性
    let person3 = {...person, name:'Jack', address:'Aussie'};

    </script>

  </body>
  </html>
  ```
