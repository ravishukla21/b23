import { Link } from "react-router-dom";

export const StudentCard = (
  {id,name, batch,
  student_code , score ,green_card ,
  Poster}
) => {  
  console.log(id,"id")
  return (
    <div className={"student-card"}>
      <img className="student-image" style={{width:"50px"}}  src={Poster}></img>
      <p className="student-name" >{name}</p>
      <p className="student-batch">{batch}</p>
      <h3 className="student-green-card" style={{color:"green"}}>{green_card}</h3>
      <button className="student-detail">
        <Link to={`/student/${id}`}>  View Details</Link>
       </button>

      {/* Show student details here with a button to view details */}
    </div>
  );
};
