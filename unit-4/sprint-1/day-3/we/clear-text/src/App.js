import {useState} from "react"
import './App.css';

function App() {
  const [text,settext]=useState("")
  
  const val=(e)=>{settext(e.target.value)}
  const hello=()=>{settext("")}
  return (
    <div className="App">
      <header className="App-heade">
      <input  value={text} onChange={val} placeholder="input the values"></input>
      <h2>{text}</h2>
      <button onClick={hello}>CLEAR</button>
      </header>
    </div>
  );
}

export default App;
