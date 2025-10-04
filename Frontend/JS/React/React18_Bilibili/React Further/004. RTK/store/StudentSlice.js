// 使用RTK来创建store
import { createSlice } from "@reduxjs/toolkit";

// 创建reducer的切片
// 需要一个配置对象作为参数。通过对象的不同属性来指定slice的配置信息。
const studentSlice = createSlice({
    name: 'student', // 用来自动生成action.type
    initialState: {
        name: '孙悟空',
        age: 18,
        gender: '男',
        address: '花果山',
    },
    reducers: { //直接在对象中添加方法

        // state是proxy对象，可以直接修改
        setName(state, action){
           state.name = action.payload;
        },

        setAge(state, action){
            state.age = action.payload;
        }
    }
});

export const {setName: setStudentName, setAge: setStudentAge} = studentSlice.actions;
export const {reducer: studentReducer} = studentSlice;