import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import { studentdata } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";


export const StudentList = () => {
   const dispatch=useDispatch()
  const store=useSelector((store)=>store.studentReducer)
  console.log(store,"storestudent");

  useEffect(()=>{
   studentdata(dispatch)
    
  },[])

  //  {
  //   "id": 1,
  //   "name": "Ritesh kamthe",
  //   "batch": "RCT211",
  //   "student_code": "fw22_74",
  //   "score": 5,
  //   "green_card": 4,
  //   "Poster": "https://assets.webiconspng.com/uploads/2016/12/User-Icon.png"
  // }
  return (
    <div>
      <div data-testid="student-list" style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto ",gap:"auto"}}>
        {store?.students?.map((el)=>{
          return <StudentCard key={el.id} id={el.id} name={el.name} batch={el.batch} 
          student_code={el.student_code}  score={el.score} green_card={el.green_card} 
          Poster={el.Poster}
          />
        })}
        {/* Map through the student list using StudentCard component  */}
      </div>
    </div>
  );
};
