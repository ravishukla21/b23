import React from "react";
import { handleAddActionObj } from "../Redux/action";
import { handleReduceActionObj } from "../Redux/action";
import {store} from "../Redux/store";


const CounterButtons = () => {

  const {dispatch,subscribe} =store;
  const addHandler =()=>{
    dispatch(handleAddActionObj());

  }
  const reduceHandler =()=>{
    dispatch(handleReduceActionObj());
  }




  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={addHandler}>ADD</button>
      <button data-testid="reduceButton" onClick={reduceHandler}>REDUCE</button>

    </div>
  );
};

export default CounterButtons;
