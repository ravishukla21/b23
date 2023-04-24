import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios" 

export const allaboutlogin=(initsate)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`https://reqres.in/api/login`,initsate).then((res)=>{
        console.log(res.data,"token")
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    }).catch((err)=>{
        dispatch({type:LOGIN_FAILURE})
    })
  }


//https://reqres.in/api/login