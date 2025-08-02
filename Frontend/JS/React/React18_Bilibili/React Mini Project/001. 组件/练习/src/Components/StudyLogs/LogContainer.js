import DateComponent from "./DateComponent";
import './LogContainer.css';

const LogContainer = () => {
    return <div className="log-container">
        <DateComponent/>
        
        <div className='content'>
            <h2 className='description'>
                学习React
            </h2>
            
            <div className='time'>
                3 hours
            </div>
        </div>
    </div>
}

export default LogContainer;