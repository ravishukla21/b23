import React from "react";
import { store } from "../Redux/store";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { useState } from "react";

const Counter = () => {
  const [state, setState ] = useState(0);
  const {subscribe}=store;
  const forceUpdate = ( ) =>setState((prev)=>prev+1)
  subscribe(()=>{
    forceUpdate()
   
  })
  
 
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>


      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      <CounterButtons/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
