### Middleware 中间件

#### 1. 什么是 Middleware（中间件）

##### 在 Redux 里，middleware 是一种拦截 action 的机制。
##### 想象一下你 dispatch 一个 action：
···js
store.dispatch({ type: 'students/fetchStart' })
```

##### Redux 的执行顺序是这样的：

→ middlewareA
→ middlewareB
→ reducer
→ 更新 store state


中间件就像“拦截器”一样，可以：

打日志（例如 redux-logger）；

处理异步逻辑（例如 redux-thunk）；

拦截某些 action 改变行为；

在 RTK Query 里：处理 网络请求、缓存、自动重试、轮询 等。
