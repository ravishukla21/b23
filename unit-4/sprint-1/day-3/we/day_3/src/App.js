// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [text,setText]=React.useState(0)
  console.log(text)
  const hello=()=>{setText(text+1)}
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Count is {text}</h1>
        <button onClick={hello}>Add</button>
       hello
      </header>
    </div>
  );
}

export default App;
