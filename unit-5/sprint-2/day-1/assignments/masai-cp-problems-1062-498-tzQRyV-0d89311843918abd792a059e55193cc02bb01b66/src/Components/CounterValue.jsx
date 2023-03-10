import React from "react";
import { useState } from "react";

import {store} from "../Redux/store";



const CounterValue = () => {

  const {getState,dispatch,subscribe}=store;
  const [render,setrender] = useState(0)
  console.log(getState(),"hihihihihih")
  subscribe(()=>{
    console.log("set",getState())
    setrender(prev=>prev+1)

  })
  const counter=getState().counter
  // const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
