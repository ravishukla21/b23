import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [text,setText]=useState("")
  const [todo,setTodo]=useState([])
  // const hello=(e)=>{setText(e.target.value)}
  // console.log(e.target.value)
  const handle=(e)=>{setText(e.target.value)}
   console.log(text)
   const add1=()=>{
       setTodo([...todo,text])
       setText("")

   }
   console.log(todo)
   const newtodo=todo.map((el)=>{return <h1>{el}</h1>})

  return (
    <div className="App">
      Todo
      <br/>
      <input onChange={handle}   value={text} /> &nbsp; &nbsp; &#160;&nbsp; &nbsp; &#160;
      <button onClick={add1} >ADD</button>
      <h5>{newtodo}</h5>
    </div>
  );
}

export default App;
