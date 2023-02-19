
import TodoInput from "./TodoInput";
import { useState,useEffect } from "react";
// import { getData,postData } from "./Api";
import axios from "axios";


// const getData=()=>{
//   return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`)
// }
const getData=()=>{
  return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
}
const postData=(data={title:"",status:""})=>{
  return axios({
      method:"post",
      url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
      data:data
  })
}

const Todos = () => {
  const [todos,setData]=useState([])
  // const [loading,setLoading]=useState(false)

  const fetchdata=()=>{
    getData().then((res)=>setData(res.data))
  }

  useEffect(()=>{
    fetchdata()
  },[])

  const handeldd=(data)=>{
    postData(data).then(()=>{
      fetchdata()
    })
  }

  return (
    <div>
      <TodoInput handeldd={handeldd}/>
    {/* add TodoInput component here */}
    {/* map through the todos array and display the tasks */}
    {/* // <div data-testid = "todos-wrapper"> */}
    <div data-testid = "todos-wrapper">
    {todos.map((el)=>{
      let a=el.status?"True":"False"
      return <h1>{el.title} - {a}</h1>
    })}
    {/* // </div> */}
    </div>
    </div>
  );
};

export default Todos;