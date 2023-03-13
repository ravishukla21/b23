import { GET_PRODUCT_REQUEST,GET_PRODUCT_FAILURE, GET_PRODUCT_SUCCESS } from "./actionTypes";

export const todoRequestAction=()=>{
  return {type:GET_PRODUCT_REQUEST}
  
  }

export const todoSuccessAction=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
}

export const todoFailureAction =()=>{
  return {type:GET_PRODUCT_FAILURE}
}


export const getProducts = () => {
  // Complete get products functionality here

};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
