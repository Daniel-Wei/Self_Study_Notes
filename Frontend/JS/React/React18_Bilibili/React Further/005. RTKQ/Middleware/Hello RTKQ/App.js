import { useGetAllStudentsQuery } from "./store/studentApi";

function App() {
   const {data: result, isSuccess, isLoading} = useGetAllStudentsQuery();
   
   return <>
      {isLoading && <p>Loading...</p>}
      {isSuccess && result.data.map(d => 
         <p key={d.id}>
            {d.name} -- 
            {d.department} -- 
            {d.gpa} -- 
            {d.graduationYear}
         </p>
      )}
   </>
}

export default App;
