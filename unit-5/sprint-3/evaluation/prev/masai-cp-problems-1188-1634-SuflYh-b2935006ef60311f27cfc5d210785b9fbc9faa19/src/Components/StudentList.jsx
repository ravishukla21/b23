import { useSelector, useDispatch } from "react-redux"
import { getstudentdata } from "../Redux/StudentReducer/action";
import { useEffect } from "react";
import { StudentCard } from "./StudentCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const StudentList = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.studentReducer)
  console.log(store, "storeinstudentlist")
  const { isLoading, isError, students } = store;
  const [searchparams]=useSearchParams();
  const location=useLocation();
  console.log(location,"locaytion")
  let obj={
    params:{
      batch:searchparams.getAll("batch")
    }
  }
  useEffect(() => {

    dispatch(getstudentdata(obj))
  }, [location.search])
  return (
    <div>
      <div data-testid="student-list" style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
        {/* Map through the student list using StudentCard component  */}
        {students.map((el, index) =>  
         
          <div key={index} >  < StudentCard {...el} /> </div>
          
          )}

      </div>
    </div>
  );
};
