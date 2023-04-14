//DO NOT change the function names

import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";

const handleAdd = (val) => {
    return {type:ADD,payload:val}
};  

const handleReduce = (val) => {
   return {type:REDUCE,payload:val}
};  
const handleTheme = (val) => {
    return {type:CHANGE_THEME,payload:val}
};  

export { handleAdd, handleReduce, handleTheme };
