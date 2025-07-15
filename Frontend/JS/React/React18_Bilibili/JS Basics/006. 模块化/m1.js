const defaultExport = 'default export';
const b = 20;
const c = 30;
// 命名导出
export const obj = {
    name: 'DddWww',
    age: 30,
    gender: 'Male'
}

// 命名导出
export const func = () => {
    console.log(obj);
}

// at most 1 default export
export default defaultExport; // 默认导出

export {b, c}; // 统一命名导出 
