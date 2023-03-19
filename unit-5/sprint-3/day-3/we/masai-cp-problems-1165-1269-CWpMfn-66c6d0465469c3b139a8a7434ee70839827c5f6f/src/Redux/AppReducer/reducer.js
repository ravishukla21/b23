import * as types from "./actionType";
import { GETCOFFEEDATA,GETEMPLOYEEDATA,GETRESTAURANTDATA } from "./actionType";

const initialState = {
  coffeeData: [],
   restaurantData: [],
   employeeData : []
  
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case GETCOFFEEDATA:
      return {...state,coffeeData:payload}
    case GETEMPLOYEEDATA:
      return {...state,employeeData:payload}
    case GETRESTAURANTDATA:
      return {...state,restaurantData:payload}
  }
  return state
};

export { reducer };