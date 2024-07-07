### 019 总结state

1. 理解
   - state是组件对象最重要的属性，state的值必须是一个对象（可以包含多个key-value的组合）。
   - 组件被称为“状态机”。通过更新组件的state来更新对应的页面显示（重新渲染组件）。
2. 强烈注意
   - 组件中render方法中的this为组件实例对象instance
   - 组件自定义方法中的this为undefined（‘use strict’），如何解决？
     - 强制绑定this：通过函数对象的bind() in constructor - this.changeIsHotStateForInstance = this.changeIsHotState.bind(this);
     - 箭头函数：changeIsHotStateForInstance = () => {this.state.isHot ...}
    
  - 状态数据，不能直接修改或更新：需要使用setState(): this.setState({isHot: !isHot});
