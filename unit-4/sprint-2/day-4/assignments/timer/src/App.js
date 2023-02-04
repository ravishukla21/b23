// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Timer from "./Components/Timer"
function App() {
  const [timer, settimer] = useState(true)
  return (

    <div className="App">
      {timer && <Timer />}
      <br />
      <button onClick={() => {
        return settimer(!timer)
      }} >Click me</button>

    </div>
  );
}

export default App;
