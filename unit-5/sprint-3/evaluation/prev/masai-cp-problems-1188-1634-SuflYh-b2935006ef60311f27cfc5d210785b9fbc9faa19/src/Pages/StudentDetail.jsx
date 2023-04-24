
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const StudentDetail = () => {
  const [singleprod, setsingleprod] = useState([])
  const val = useParams()
  console.log(val, "id")
  let { id } = val;
  id=+id
  console.log(typeof id)
  const store = useSelector(store => store.studentReducer)
  console.log(store, "storeinsingle")
  const { students } = store;
  const { Poster, name, code, batch, score, green_card } = store;

  
  useEffect(() => {
    let arr12 = students.find((el) => el.id === id)
    console.log(arr12, "getproductswithfilters")
    console.log(singleprod,"singleeprodsksdafjbdasb")
    setsingleprod([...singleprod, arr12])
  }, [id,setsingleprod])

 console.log(singleprod,"single")
  return (
    <div className={"student-card"}>
  
    {singleprod.length>0 &&   singleprod?.map((el)=><div>
      <h3 className="student-id">{el.id}</h3>
      <img className="student-image" width={"20%"} src={el.Poster}></img>
      <h3 className="student-name">{el.name}</h3>
      <p className="student-code">{el.student_code}</p>
      <p className="student-batch">{el.batch}</p>
      <p className="student-score">{el.score}</p>
      <h3 className="student-green-card">{el.green_card}</h3>
      
      
      </div>)}


    </div>
  );
};
