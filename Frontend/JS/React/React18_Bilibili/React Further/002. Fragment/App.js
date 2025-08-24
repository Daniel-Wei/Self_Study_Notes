import EmptyOut from "./FragmentEmptyComponent";
import { Fragment } from "react/jsx-runtime";

const App = () => {
    // no more extra container on DOM
    // <EmptyOut> same as <React.Fragment>, <>
    // <React.Fragment>
    // - 专门用来作为父容器的组件
    // - 只会将里面的子元素直接返回，不会创建任何新的多余的元素
    return <>
        <div>1st component</div>
        <div>2nd component</div>
        <div>3rd component</div>
    </>
}

export default App;