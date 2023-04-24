 import { AUTHREQUEST,AUTHSUCCESS,AUTHFAILURE } from "./actionTypes";
 import axios from "axios";


 
 export const login = (obj)=>(dispatch) => {  
  // Complete login logic here

  dispatch({type:AUTHREQUEST})
  return  axios.post("https://reqres.in/api/login",obj).then((res)=>{
    console.log(res.data)
    dispatch({type:AUTHSUCCESS,payload:res.data.token})
  }).catch(err=>dispatch({type:AUTHFAILURE}))

};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
