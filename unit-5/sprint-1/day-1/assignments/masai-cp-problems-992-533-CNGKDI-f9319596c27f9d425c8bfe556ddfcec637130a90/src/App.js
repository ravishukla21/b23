import "./App.css";

import Counter from "./components/Counter";

function App() {

  return (
    <div className="App">
       <h2 data-testid="counter-header">Counter</h2>
    
      
        {<Counter />}




{/* 
        <h1>hihello</h1>
        <h2>god is great</h2>
        <h3>hello world</h3>
        <h4>i am a man</h4>
        <h5>i am a developer</h5>
        <h6>ok i eant to beacome a developer</h6>
        <p style={{color:"red",fontWeight:"bold",}}>hihi</p> */}
      </div>
   
  );
}

export default App;
