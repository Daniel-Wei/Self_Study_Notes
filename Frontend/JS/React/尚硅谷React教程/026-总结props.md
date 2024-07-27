### 026 总结props

1. 理解
   - 每个组件对象都会有props属性。
   - 组件标签的所有属性都保存在props中。
2. 作用
   - 通过标签属性从组件外向组件内传递变化的数据。
   - 注意：组件内部不要修改props，read only
3. 编码操作
   ```javascript
   //1. 内部读取某个属性值
   this.props.name

   //2. 对props中的属性值进行类型限制和必要性限制
   //2.1. 第一种方式 React v15.5已经弃用
   Person.propTypes = {
     name: React.PropTypes.string.isRequired,
     age: Rect.PropTypes.number
   }

   //2.2. 第二种方式：使用prop-types库进行限制
   Person.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number
   }

   //3. 拓展属性：将对象的所有属性通过props传递
   <Person {...person1}/>

   //4. 默认属性值
   Person.defaultProps = {
     age: 18,
     gender: male
   }

   //5. 组件类的构造函数
   constructor(props){
     super(props)
   }
