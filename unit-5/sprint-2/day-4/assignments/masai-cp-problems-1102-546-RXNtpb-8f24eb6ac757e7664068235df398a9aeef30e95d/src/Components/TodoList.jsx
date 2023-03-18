import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { getTodos } from "../Redux/action";
// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>{
    console.log(state.todos);
    return state.todos;
  })
  useEffect(()=>{
    
    dispatch(getTodos());
  },[])
  return (
    <div data-testid='todo-list-wrapper'>
      <h2>Todo List</h2>
      {/* map all the "individual/single" todo inside this div. */}
      {
        data.map((item,index)=>{
          return(
            <div data-testid="single-todo" key={item.id} >
              {item.title}-{item.status?"True":"False"}
      </div>
          )
        })
      }
      


    </div>
  );
};

export default TodoList;
