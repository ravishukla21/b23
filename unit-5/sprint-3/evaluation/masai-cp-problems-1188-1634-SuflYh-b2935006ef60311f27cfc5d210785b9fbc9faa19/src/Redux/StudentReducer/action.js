import { STUDENT_REQUEST_PENDING,STUDENT_REQUEST_SUCCESS,STUDENT_REQUEST_FAILURE } from "./actionTypes";
import axios from "axios"
export const studentdata=(dispatch)=>{
    dispatch({type:STUDENT_REQUEST_PENDING})

    axios
    .get(`http://localhost:8080/students`)
    .then((res)=>{

        console.log(res.data,"student action")
        dispatch({type:STUDENT_REQUEST_SUCCESS,payload:res.data})

    }).catch(()=>{
        dispatch({type:STUDENT_REQUEST_FAILURE})
    })



}