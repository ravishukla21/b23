import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const login = (inputdata)=>(dispatch) => {
  console.log(inputdata,"inputdata12345")
  // Complete login Functionality
  dispatch(loginrequestaction());
  axios.post(`https://reqres.in/api/login`,inputdata).then((res)=>{
    console.log(res.data.token,"token")
    dispatch(loginsuccessaction(res.data.token))
  }).catch(()=>dispatch(loginfailureaction()))

};
export const loginrequestaction=()=>{
  return {type:LOGIN_REQUEST}

}
export const loginsuccessaction=(value)=>{
  return {type:LOGIN_SUCCESS,payload:value}
  
}
export const loginfailureaction=()=>{
  return {type:LOGIN_FAILURE}
}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
