### 031 总结refs

1. 理解
   - 组件内的标签可以定义ref属性来标识自己
2. 作用
   - 通过ref来找到组件内的标签
3. 编码操作
   ```javascript
   //1. 字符串形式：存在效率问题，已被新版本淘汰。
   <input ref="input1"/>

   //2. 回调形式的ref
   <input ref={(c) => {this.input1 = c}}/>
   <input ref=this.saveInput/>

   saveInput = (input) => {
      this.input = input;
   }

   //3. createRef创建ref容器
   myRef = React.createRef();
   render(){
     return(
       <input ref={this.myRef}/>
     )
   }
