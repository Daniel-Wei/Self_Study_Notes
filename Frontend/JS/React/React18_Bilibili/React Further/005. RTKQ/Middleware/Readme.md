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

### 3. RTK Query 需要它自己的 middleware

#### RTK Query 的强大功能（比如自动缓存、轮询、重新请求、取消请求等）都是通过它自己的 middleware 实现的。

#### 所以我们必须在 store 里 把它的 middleware 接进来：
```js
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(studentApi.middleware)
```

### 这句话意思是：
- 取出 RTK 默认中间件，然后在后面拼接上 studentApi.middleware，让 RTK Query 的逻辑也能生效。
