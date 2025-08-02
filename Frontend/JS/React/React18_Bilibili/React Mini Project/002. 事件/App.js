import './App.css';

// style必须使用对象设置
const btnContainerStyles = {
  width: 200,
  height: 200,
  margin: '100px auto',
  backgroundColor: 'yellow'
};

const btnStyles = {
  color: 'blue',
  fontSize: '16px',
  backgroundColor: 'lightgrey'
};

const btnOnClick = () => {
  alert("button was clicked")
}

const hyperlinkOnClick = (event) => {
  alert("hyperlink was clicked");

  // 事件对象event
  // - React事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象event
  // - React中的event事件对象同样不是原生的js的event事件对象，是经过REact包装处理后的事件对象
  // - 由于event事件对象经过了包装，在使用过程中我们无需再去考虑浏览器兼容性问题
  event.preventDefault();

  // 取消event事件的冒泡
  // 否则，on click hyperlink后，hyperlinkOnClick() 会被触发，container div的onClick()也会被触发
  event.stopPropagation();

  // 在React中，无妨通过return false来取消事件的默认行为
  // 在这个例子中，点击了超链接后，页面仍然会跳转
  return false;
}

function App() {
   return <div style={btnContainerStyles} onClick={() => alert("container div was clicked")}>

      {/* 
          jquery: 事件的命名都是小写 - onclick
          React：事件的命名使用驼峰命名法 - onClick

          jquery：事件的属性值直接是执行代码 - onclick="alert(123)"
          React：事件的属性值需要是回调函数 - onClick = () => alert(123)
      */}
      <button style={btnStyles} onClick={btnOnClick}>click me</button>
      <br/>
      <a href='https://www.google.com' onClick={hyperlinkOnClick}>Hyperlink</a>
    

   </div>
}

export default App;
