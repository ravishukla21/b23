// import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState("")
  const [handleclick, sethandleclick] = useState(["abra"])

  let hello123 = (e) => { setText(e.target.value) }
  let onClick = () => {

    let newarray=[...handleclick,text]

    sethandleclick(newarray)
    setText("")
   // console.log(text)
    console.log(handleclick,"tiy")
  
  }
  console.log(handleclick,"hi")

  // let jigra=handleclick.map((el)=>{return <h1>{el}</h1>})
  return (

   
    <div className="App">
      <input onChange={hello123} value={text} />
      <button onClick={onClick} >ADD</button>
      <div>
        {/* {jigra} */}
      </div>

    </div>
  );
}

export default App;
