import axios from "axios";
import React, { useState } from "react";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addtodoerrorstatus, addtodorequestaction, addtodosuccessaction, gettodorequestaction } from "../Redux/action";
import TodoList from "./TodoList";
import { postTodos } from "../Redux/action";
const TodoInput = () => {
  const dispatch = useDispatch();
  // const store = useSelector(store => store)
  // console.log(store, "store")
  // const { isError, isLoading, todos } = store;
  // console.log(isError, isLoading, todos, "todosiserrorisloading")
  const [state, setstate] = useState("");
  const handleClick = () => {
    let task = {
      title: state,
      status: false
    }
    console.log(task, "taskinside")
   
 
    dispatch(postTodos(task));
    setstate("");
  
  }



  return (
    <div>
      <input
        data-testid="todo-input"
        placeholder="add todo here.."
        value={state}
        onChange={(e) => setstate(e.target.value)}

      />
      <button data-testid="todo-add-btn" onClick={handleClick}>Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
