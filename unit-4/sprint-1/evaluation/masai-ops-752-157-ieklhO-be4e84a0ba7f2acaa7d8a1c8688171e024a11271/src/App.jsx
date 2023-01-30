import { useState } from "react";
function App() {
  const [count,setcount]= useState(0);
  const hello=()=>{
    setcount(count-1)
  }
  const hello1=()=>{
    setcount(count+1)
  }
  const hello3=()=>{
    setcount(0)
  }
  let evenorodd
  if(count%2===0){
   evenorodd="Even"
  }else{
    evenorodd="Odd"

  }
  var flag=true
  let primecheck
  if(count===0 || count===1){
    primecheck="false"
  }else{
    for(let i=2;i<=count-1;i++){
      if(count%i===0){
        flag=false
        break
      }

    }
    if(flag===true){
      primecheck="true"
    }else{
      primecheck="false"
    }

  }
  
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={hello} disabled={count<=0}>-1</button>
        <button data-testid="plusonebtn" onClick={hello1}>+1</button>
      <div>
        <button data-testid="resetbtn" onClick={hello3}>Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count: {count}</span>
      <div>
        <span data-testid="odd-or-even">This Number is: {evenorodd}</span>
        <span data-testid="is-prime">Prime Number:{primecheck}</span>
      </div>
    </div>
  );

}

export default App;

