import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterValue = () => {  
  const store = useSelector(store => store.counterReducer) 
  return <div data-testid="counterValue">{store.counter}</div>;
};

export default CounterValue;
