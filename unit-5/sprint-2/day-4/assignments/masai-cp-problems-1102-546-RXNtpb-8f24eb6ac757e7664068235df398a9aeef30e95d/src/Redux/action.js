import { ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionTypes";
import axios from "axios";
//action creator functions here
export function Getdotorequest(){
    return{
        type:GET_TODOS_REQUEST
    }
}

export function Gettodosuccess(payload){
    return{
        type:GET_TODOS_SUCCESS,payload
    }
}
    export function Gettodofailure(){
        return {
                type:GET_TODOS_ERROR
        }
    }

export const getTodos = () => dispatch => {
    dispatch(Getdotorequest());
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`).then((res)=>{
        console.log(res.data);
       dispatch(Gettodosuccess(res.data)) 
    }).catch((err)=>{
        console.log(err);
        dispatch(Gettodofailure())
    })
}

export function Addtodoreuest(){
    return {
        type:ADD_TODOS_REQUEST
    }
}

export function Addtodosuccess(){
    return {
        type:ADD_TODOS_SUCCESS
    }
}
export function Addtodofailure(){
    return {
        type:ADD_TODOS_ERROR
    }
}

export const SetTodos = input => dispatch => {
    dispatch(Addtodoreuest());
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,input).then((res)=>{
        console.log(res.data);
        dispatch(Addtodosuccess());
        dispatch(getTodos());
    }).catch((err)=>{
        console.log(err);
        dispatch(Addtodofailure());
    })
}