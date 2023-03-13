import React from "react";
import {useDispatch,useSelector} from "react-redux";
const CounterValue = () => {

  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.counter)





  return <div data-testid="counterValue">{count}</div>;
};

export default CounterValue;
