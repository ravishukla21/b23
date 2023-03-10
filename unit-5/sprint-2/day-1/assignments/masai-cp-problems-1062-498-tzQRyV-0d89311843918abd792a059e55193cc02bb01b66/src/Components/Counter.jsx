import React from "react";
import { store } from "../Redux/store";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";


const Counter = () => {
  console.log(store, "store")
  const {getState,dispatch,subscribe}=store;

  console.log(getState())
  console.log(dispatch,"dispatch")
  console.log(subscribe,"subscribe")
  
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      <CounterButtons />
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
