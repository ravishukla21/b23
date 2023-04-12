import React from "react";
import { store } from "../Redux/store";


const CounterValue = () => {   
  
  const {getState,dispatch} =store;
  console.log(getState().counter,"value")
   //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
