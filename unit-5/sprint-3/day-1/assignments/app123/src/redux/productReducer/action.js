import { PRODUCT_FAILURE,PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS ,GET_PRODUCT_SUCCESS} from "./actionTypes"
import axios from "axios"
export const addProduct=(data)=>(dispatch)=>{


    dispatch({type:PRODUCT_REQUEST})

    axios
    .post("http://localhost:8080/products ",data)
    .then(()=>{
        dispatch({type:ADD_PRODUCT_SUCCESS})
    })

}

export const getProducts=(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios
    .get("http://localhost:8080/products")
    .then((res)=>{
        console.log(res,"resd")
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

