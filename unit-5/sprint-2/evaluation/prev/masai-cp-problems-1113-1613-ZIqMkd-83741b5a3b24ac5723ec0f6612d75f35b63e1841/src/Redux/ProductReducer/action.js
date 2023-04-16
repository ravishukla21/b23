import axios from "axios";
import { GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE } from "./actionTypes";
let asc="asc"
export const getProducts =(value13="")=> (dispatch) => {
  console.log(value13,"value13")
  // console.log(props,"props")
  // Complete get products functionality here
  dispatch(getproductrequestaction());
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?_sort=discountPercentage&_order=${value13}`).then(
    (res)=>{console.log(res.data,"res.dataproductreducer")
    dispatch(getproductsuccessaction(res.data))
  
  }
  ).catch((err)=>dispatch(getproductfailureaction()))

};
// http://localhost:8080/products


export const getproductrequestaction=()=>{
  return {type:GET_PRODUCT_REQUEST}
}
export const getproductsuccessaction=(value)=>{
  return {type:GET_PRODUCT_SUCCESS,payload:value}
}
export const getproductfailureaction=()=>{
  return {type:GET_PRODUCT_FAILURE}
}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
