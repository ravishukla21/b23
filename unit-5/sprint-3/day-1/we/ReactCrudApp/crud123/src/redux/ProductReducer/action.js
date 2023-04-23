import axios from "axios";
import { GETPRODUCTREQUESTACTION,GETPRODUCTSUCCESSACTION,GETPRODUCTFAILUREACTION, PATCH_PRODUCT_REQUEST, PATCH_PRODUCT_SUCCESS, PATCH_PRODUCT_FAILURE } from "./actionTypes";
import { POSTPRODUCTREQUESTACTION,POSTPRODUCTSUCCESSACTION,POSTPRODUCTFAILUREACTION } from "./actionTypes";

export const getproductrequestaction=()=>{
    return {type:GETPRODUCTREQUESTACTION}
}
export const getproductsuccessaction=(value)=>{
    return {type:GETPRODUCTSUCCESSACTION,payload:value}
}

export const getproductfailureaction=()=>{
    return {type:GETPRODUCTFAILUREACTION}
}
export const postproductsuccessaction=(value)=>{
    return {type:POSTPRODUCTSUCCESSACTION,payload:value}
}
export const postproductrequestaction=()=>{
    return {type:POSTPRODUCTREQUESTACTION}
}
export const postproductfailureaction=()=>{
    return {type:POSTPRODUCTFAILUREACTION};
}

export const postdataproductaction=(value)=>dispatch=>{
    dispatch(postproductrequestaction())
    axios.post("http://localhost:8080/products",value).then(res=>{
        console.log(res.data,"datapostindb.json")
        dispatch(postproductsuccessaction(res.data))
    }).catch(dispatch(postproductfailureaction()))
}
export const getdataproductaction=(paramobj)=>dispatch=>{   
    dispatch(getproductrequestaction());
    axios.get("http://localhost:8080/products",paramobj).then((res)=>
    { console.log(res.data);
       dispatch(getproductsuccessaction(res.data))
    
    }).catch(dispatch(getproductfailureaction()));

}

export const editproducts=(dataobj,id)=>(dispatch)=>{
    dispatch({type:PATCH_PRODUCT_REQUEST})
    return axios.patch(`http://localhost:8080/products/${id}`,dataobj).then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:PATCH_PRODUCT_FAILURE})
    })

}