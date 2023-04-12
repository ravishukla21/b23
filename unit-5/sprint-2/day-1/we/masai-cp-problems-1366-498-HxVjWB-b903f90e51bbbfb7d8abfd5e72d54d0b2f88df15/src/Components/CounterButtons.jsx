import React from "react";
import { store } from "../Redux/store";
import { ADD,REDUCE } from "../Redux/actionTypes";
import { handleAddActionObj,handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => { 
  const {dispatch}=store;
  function addhandleClick(value){
    console.log("Add",value)
    dispatch(handleAddActionObj(value))

  }
  function reducehandleClick(value){
    dispatch(handleReduceActionObj(value))

  }
  
  
  
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton"  onClick={()=>addhandleClick(1)}>ADD</button>
      <button data-testid="reduceButton"  onClick={()=>reducehandleClick(1)}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
