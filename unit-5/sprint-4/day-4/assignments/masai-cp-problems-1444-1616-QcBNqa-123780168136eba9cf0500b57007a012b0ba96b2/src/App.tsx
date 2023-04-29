import React, { useEffect, useState } from "react";

function App() {
  
  const [counter,setcounter]=useState<number>( Number(localStorage.getItem("counter"))||0);
  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{

   
    setcounter(counter+1)
    
   console.log("hello",counter);
  }
  const handleClick1=(e:React.MouseEvent<HTMLButtonElement>)=>{
    setcounter(counter-1)

  }
  const handleClick2=(e:React.MouseEvent<HTMLButtonElement> )=>{
    setcounter(counter+5)


  }
  const handleClick3=(e:React.MouseEvent<HTMLButtonElement>)=>{
    setcounter(counter-5)
  }

  useEffect(()=>{
   const obj={
      counter
    }
    console.log(obj)
    localStorage.setItem("counter",JSON.stringify(obj.counter));
  },[counter]);

  return (
    <div className="App">
      <h1 data-testid="counter">Count:{counter}</h1>
      <button data-testid="increment" onClick={handleClick}>Increment</button>
      <button data-testid="decrement" onClick={handleClick1}>Decrement</button>
      <button data-testid="increment5" onClick={handleClick2}>Increment 5 times</button>
      <button data-testid="decrement5" onClick={handleClick3} >Decrement 5 times</button>
    </div>
  );
}

export default App;
