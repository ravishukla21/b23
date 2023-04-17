import axios from "axios";
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionTypes";




export const login = (inputdata)=>(dispatch) => {
  // Complete the login functionality
  console.log(inputdata,"loginaction")
  dispatch(loginrequestaction())
  axios.post(`https://reqres.in/api/login`,inputdata).then((res)=>{
    console.log(res.data.token,"logintoken");
    dispatch(loginsuccessaction(res.data.token))

  }).catch(()=>dispatch(loginfailureaction()));
};
// https://reqres.in/api/login
//eve.holt@reqres.in

export const loginrequestaction=()=>{
  return {type:LOGIN_REQUEST}
}

export const loginsuccessaction=(payload)=>{
  return {type:LOGIN_SUCCESS,payload:payload}
}

export const loginfailureaction=()=>{
  return {type:LOGIN_FAILURE}
}