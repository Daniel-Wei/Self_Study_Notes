import DateComponent from "./DateComponent";
import './Log.css';

const Log = () => {
    return <div className="log">
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

export default Log;