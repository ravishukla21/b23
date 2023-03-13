import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import {useDispatch,useSelector} from "react-redux";


const Counter = () => {

  // const dispatch=useDispatch();
  // const count=useSelector((state)=>state.counter.counter)


  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter">
      <h1>Counter</h1>
     



      <CounterValue/>
       <CounterButtons/>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
