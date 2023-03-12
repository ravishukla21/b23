import React,{useState} from "react";



export default function TodoInput({addTodo}){

    const [input,setInput]=useState("");
    const handleAddTodo=()=>{
        console.log(input)
        addTodo(input)
        setInput("")

    }

    return <>
    <div>

        <input data-testid="todo-input"
        type="text"
        value={input}
        placeholder="addtodo"
        onChange={(e)=>setInput(e.target.value)}        
        />
        <button data-testid="add-button" onClick={handleAddTodo}>Add Todo</button>
    </div>
    </>
}