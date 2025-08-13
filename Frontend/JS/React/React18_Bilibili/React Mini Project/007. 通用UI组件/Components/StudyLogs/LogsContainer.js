import { useState } from "react";
import Log from "./Log";
import './LogsContainer.css';
import Card from "../UI/Card";

const LogsContainer = ({logData}) => {

    // foreach是对原数组进行修改
    // map是直接胜场新的数组
    // Warning: Each child in a list should have a unique “key” prop.
    // 将所有对数据进行处理的逻辑放在外面
    logData = logData.map(data => 
                // <Log key = {data.index} logData = {data} index = {idx}/> 
                <Log key = {data.id} logData = {data} /> 
            )


    return <Card className="logs-container">
        {
            logData
        }
        <button className="button">+</button>
    </Card>
}

export default LogsContainer;