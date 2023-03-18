
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { SetTodos } from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const [input,setInput]=useState("");
const dispatch=useDispatch();
  function Handleinput(e){
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function Submitinput(){
    const data={
      title:input,
      status:false
    }
    dispatch(SetTodos(data));
    setInput("");
  }
  return (
    <div>
      <input
        data-testid="todo-input" onChange={Handleinput} value={input}
      />
      <button data-testid="todo-add-btn" onClick={Submitinput} >Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
