// import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [handleclick, sethandleclick] = useState([])

  let hello123 = (e) => { setText(e.target.value) }
  let onClick = () => {

    const newItem = {
      id: Date.now() + Math.random() + text,
      title: text,
      status: false,
    };
    const todoListAfterItemAddition = [...handleclick, newItem];
    sethandleclick(todoListAfterItemAddition);
    setText("")

    // console.log(handleclick,"tiy")

  }
  console.log(text)
  console.log(handleclick, "hi")

  let jigra = handleclick.map((el) => { return el.title })
  console.log(jigra, "hjkl")
  function Todoitem(props){
    return(
      <div>
        <h1>{props.title}-{props.status?"compl":"notcompl"}</h1>
        <button onClick={()=> props.handleClick1(props.id)}>Toggle</button>
        <button onClick={()=> props.handleClick12(props.id)}>Delete</button>
      </div>
    )
  }

  function handleToggle123(id){
    const todos=handleclick.map((todo)=>todo.id==id?{...todo,status:!todo.status}:todo)

    sethandleclick(todos)
  }
  function delete12(id){
    const todos=handleclick.filter((todo)=>todo.id!==id)
    sethandleclick(todos)
  }


  return (


    <div className="App">
      <input onChange={hello123} value={text} />
      <button onClick={onClick} >ADD</button>
      {handleclick.map((todo) =>
      <Todoitem key={todo.id}
      title={todo.title}
      status={todo.status}
      id={todo.id}
      handleClick1={handleToggle123}
      handleClick12={delete12}
      
      
      />
      //  {
      //   return (
      //     <div key={todo.id}>
      //       {todo.title}-{todo.status ? "Completed" : "Not Completed"}-{"Delete"}

      //     </div>
      //   )
      // }
      )}

    </div>
  );
}

export default App;
