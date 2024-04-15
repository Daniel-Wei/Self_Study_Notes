### 001 React 简介

#### 1. 是什么
  - 定义：用于构建用户界面的JS库

  - 基础例子
    - 发送请求，获取数据
    - 处理数据（过滤、整理格式等）
    - 操作DOM呈现页面 --- React的关注侧重点
  
  - React是一个将数据渲染为HTML视图的开源JS库

#### 2. 开发者：Meta

#### 3. 为什么要学
  - 原生JS操作DOM繁琐、效率低（**DOM-API 操作 UI**）。
  - 使用JS直接操作DOM，浏览器回进行**大量的重绘重排**。
  - 原生JS**没有组件化编码方案**（HTML + CSS + JS，不只是JS），代码复用率低。

#### 4. React的特点
  - 采用**组件化模式、声明式编码**，提高开发效率和组件复用率。
  - 在**React Native**中可以使用React语法进行**移动端开发**。
  - 使用**虚拟DOM+Diffing算法**，尽量减少与真实DOM的交互。
    - 原生JS实现
      ```javascript
      <ul id="list"></ul>

      <script type = "text/javascript">
        let persons = [
          {id: '001', name: 'Steven', age: 18},
          {id: '002', name: 'Ian', age: 19},
        ];

        let htmlStr = '';

        persons.forEach((person) => {
          htmlStr += `<li>${person.name} - ${person.age}`
        });

        //操作DOM（True-DOM）呈现界面
        //更新数据需要全部重新渲染
        document.getElementById('list').innerHTML = htmlStr;
      
      </script>
      ```
    - React实现
      - 数据 -> 虚拟DOM（Virtual DOM） -> 页面真实DOM（True - DOM）
      - 001，002 -> 001，002对应的虚拟DOM -> 001，002对应的真实DOM。
      - 更新数据时，会进行虚拟DOM比较，只需要更新增加对应的虚拟DOM，可以复用之前存在的虚拟DOM。
