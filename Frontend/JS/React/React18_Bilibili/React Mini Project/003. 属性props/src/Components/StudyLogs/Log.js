import DateComponent from "./DateComponent";
import './Log.css';
import LogContent from "./LogContent";

const Log = ({logData}) => {
    return <div className="log">
        <DateComponent date = {logData.date} id = {logData.id}/>

        {/*
            如果将组件中的数据全部写死，将会导致组件无法动态设置，不具有实用价值
            我们希望组件可以由外部传入的数据设置
            在React组件间，父组件可以通过props（属性）向子组件传递数据
        */}
        
        <LogContent description = {logData.description} 
            minutes = {logData.minutes}/>
    </div>
}

export default Log;