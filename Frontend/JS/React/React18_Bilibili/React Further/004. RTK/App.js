import { useDispatch, useSelector } from 'react-redux';
import { setStudentAge, setStudentName } from './store/StudentSlice.js';
import { setSchoolName, setSchoolRanking, setSchoolRating } from './store/SchoolSlice.js';

function App() {
    //用来加载state中的数据
    const {student, school} = useSelector(state => state);

    const dispatch = useDispatch();

    const setStudentNameHandler = () => {

        dispatch(setStudentName("DW"));
        // 其实是一样的
        // store.actions export出的set方法，使用起来更直观直接
        // dispatch({type: 'student/setName', payload: "DW"});
    }

    const setStudentAgeHandler = () => {
        dispatch(setStudentAge(student.age + 1));
    }

    const setSchoolNameHandler = () => {
        dispatch(setSchoolName());
    }

    const setSchoolRankingHanlder = () => {
        dispatch(setSchoolRanking(school.ranking + 1));
    }

    const setSchoolRatingHandler = () => {
        const newRating = Number((school.rating + 0.1).toFixed(1));
        dispatch(setSchoolRating(newRating));
    }

    return (
      <>
        <div >
          <p>
            {student.name} --- 
            {student.age} --- 
            {student.gender} --- 
            {student.address}
          </p>
          <button onClick={setStudentNameHandler}>
            Set Name
          </button>

          <button onClick={setStudentAgeHandler}>
            Set Age
          </button>
        </div>

        <div >
          <p>
            {school.name} --- 
            {school.address} --- 
            {school.ranking} --- 
            {school.rating}
          </p>
          <button onClick={setSchoolNameHandler}>
            Set Name
          </button>

          <button onClick={setSchoolRankingHanlder}>
            Set Ranking
          </button>

          <button onClick={setSchoolRatingHandler}>
            Set Rating
          </button>
        </div>
      </>
        
    )
}

export default App;
