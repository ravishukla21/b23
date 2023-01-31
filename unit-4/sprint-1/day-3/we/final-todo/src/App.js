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
  console.log(jigra,"hjkl")

  return (


    <div className="App">
      <input onChange={hello123} value={text} />
      <button onClick={onClick} >ADD</button>
      {handleclick.map((todo) => {
                    return (
                        <div key={todo.id}>
                            {todo.title}-{todo.status ? "Completed" : "Not Completed"}-{"Delete"}

                        </div>
                    )
                })}

    </div>
  );
}

export default App;
