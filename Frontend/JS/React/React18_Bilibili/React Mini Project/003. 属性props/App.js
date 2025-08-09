import './App.css';
import LogsContainer from './Components/StudyLogs/LogsContainer';

function App(props) {
   return <LogsContainer logData = {props.logData}/>;
}

export default App;
