//action creator functions here
import { GET_TODOS_ERROR,GET_TODOS_REQUEST,GET_TODOS_SUCCESS } from "./actionTypes";
import { ADD_TODOS_REQUEST,ADD_TODOS_SUCCESS,ADD_TODOS_ERROR } from "./actionTypes";

export const gettodorequestaction=()=>{
    return {type:GET_TODOS_REQUEST}
}
export const gettodosuccessaction=(value)=>{
    return {type:GET_TODOS_SUCCESS,payload:value}
}
export const gettodoerrorstatus=()=>{
    return {type:GET_TODOS_ERROR}
}

export const addtodorequestaction=()=>{
    return {type:ADD_TODOS_REQUEST}
}
export const addtodosuccessaction=(value)=>{
    return {type:ADD_TODOS_SUCCESS,payload:value}
}
export const addtodoerrorstatus=()=>{
    return {type:ADD_TODOS_ERROR}
}