import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import "./counter.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const store=useSelector(store => store.themeReducer)
  console.log(store,"storethemeincounter")

  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter" className={store.theme==="light"?"light_theme":"dark_theme"} >
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
