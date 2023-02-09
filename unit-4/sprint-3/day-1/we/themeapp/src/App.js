//import logo from './logo.svg';
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";


import './App.css';
import Navbar from './Components/Navbar';
import Button from "./Components/Button"

function App() {
  const { theme, toggletheme } = useContext(AppContext)
  console.log(theme, "hi", toggletheme, "ki")
  return (
    <div className="App"
      style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black", padding: "10px" }}
    >
      <Navbar />
      <Button onClick={toggletheme} btnText="changetheme" />
    </div>
  );
}

export default App;
