// 使用RTK来创建store
import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./StudentSlice";
import { schoolReducer } from "./SchoolSlice";


// 创建store对象：需要一个配置对象作为参数
const store = configureStore({
    // 多个reducer
    reducer: {
        student: studentReducer,
        school: schoolReducer
    }
});

export default store;