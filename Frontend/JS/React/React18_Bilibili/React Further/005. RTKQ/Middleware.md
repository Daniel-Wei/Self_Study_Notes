## Middleware 中间件

### 1. 什么是 Middleware（中间件）

#### 在 Redux 里，middleware 是一种拦截 action 的机制。
#### 想象一下你 dispatch 一个 action：
```javascript
store.dispatch({ type: 'students/fetchStart' })
```

#### Redux 的执行顺序是这样的：
- → middlewareA
- → middlewareB
- → reducer
- → 更新 store state


#### 中间件就像“拦截器”一样，可以：

- 打日志（例如 redux-logger）；

- 处理异步逻辑（例如 redux-thunk）；

- 拦截某些 action 改变行为；

- 在 RTK Query 里：处理 网络请求、缓存、自动重试、轮询 等。

### 2. RTK 默认就自带一些 middleware

#### 当你写：
```js
const store = configureStore({
  reducer: {...},
});
```

#### RTK 会自动加上一些默认的中间件，比如：

- redux-thunk（允许 dispatch 函数式 action）

- serializableCheck（防止非序列化数据进入 state）
- immutableCheck（防止直接修改 state）

#### 这些默认中间件由 getDefaultMiddleware() 提供。
