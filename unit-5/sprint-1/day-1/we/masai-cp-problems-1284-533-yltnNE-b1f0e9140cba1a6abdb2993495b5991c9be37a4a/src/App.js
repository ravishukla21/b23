import "./App.css";
import Counter from "./components/Counter";
function App() {
 let  initialvalue=0;
  return (
    <div className="App">
 
      <div data-testid="counter"><Counter initialvalue={initialvalue}/></div>
    </div>
  );
}

export default App;
