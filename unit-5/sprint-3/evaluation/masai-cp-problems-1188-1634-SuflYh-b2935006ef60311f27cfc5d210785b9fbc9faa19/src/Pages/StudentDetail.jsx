import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export const StudentDetail = () => {
  const { id } = useParams();
  const [data, setdata] = useState(" ");
  const product = useSelector((store) => store.studentReducer.students)
  console.log(product, "product")
  console.log(id, "id")
  
  useEffect(() => {
     const data12 = product.find((el) => el.id === +id);
    console.log(data12, "data12")
    setdata(data12)
  }, [])
  //  console.log(data12,"data12")
  return (
    <div className={"student-card"}>
      <h1 className="student-id">
        

        {/* Show Student Id here */}
        {id}
      </h1>
     
      
      
      <div>
        <img  style={{ width: "auto" }} src={data.Poster}></img>
        <h1 >Name:{data.name}</h1>
        <p >Batch:{data.batch}</p>
        <p>Code:{data.student_code}</p>
        <h1>Score:{data.score}</h1>

        <h3 style={{color:"green"}}>Bounty:{data.green_card}</h3>
      </div>


    </div>
  );
};
