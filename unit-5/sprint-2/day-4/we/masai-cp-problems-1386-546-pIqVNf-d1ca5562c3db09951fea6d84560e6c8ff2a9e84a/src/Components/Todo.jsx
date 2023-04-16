import React,{useEffect} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux"
import { gettodoerrorstatus, gettodorequestaction, gettodosuccessaction } from "../Redux/action";



// just write the fetch/get the todos logic when the component mounts, in this component
const Todo = () => {
  const dispatch=useDispatch();
 
  

  const sideeffects=()=>{
    dispatch(gettodorequestaction())
    axios.get("http://localhost:8080/todos").then(res=>{
      dispatch(gettodosuccessaction(res.data))
      console.log(res.data,"res.data")
    }).catch(()=>dispatch(gettodoerrorstatus()))
    
  }
  useEffect(()=>{
     sideeffects();
  },[])
  return (
    <div>
      <h1>Todos</h1>
      {/* Import TodoInput component here */}
      <TodoInput/>

      {/* Import TodoList component here */}
      <TodoList/>
    </div>
  );
};

export default Todo;
