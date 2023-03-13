import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { handleAdd,handleReduce } from "../Redux/action";

const CounterButtons = () => {


  const dispatch=useDispatch();
  const handleadd123=()=>{

    dispatch(handleAdd(1))
  }

  const handlereduce123=()=>{
    dispatch(handleReduce(1))
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleadd123}>ADD</button>
      <button data-testid="reduceButton" onClick={handlereduce123}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;


