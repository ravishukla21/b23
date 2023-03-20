import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";



export const login=(userdata,dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post("https://reqres.in/api/login",userdata )
    .then((res)=>{
        console.log(res.data.token,"respassword");

        dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    }).catch(()=>{
        dispatch({type:LOGIN_FAILURE})
    })

    
}