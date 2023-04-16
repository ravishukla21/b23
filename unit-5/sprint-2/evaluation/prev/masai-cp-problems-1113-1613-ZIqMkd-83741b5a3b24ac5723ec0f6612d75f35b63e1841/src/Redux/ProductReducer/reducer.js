import { GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAILURE } from "./actionTypes";
const initialState={
    isLoading: false,
    isError: false,
    products: [],

}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true,isError:false}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:payload}
        case GET_PRODUCT_FAILURE:
            return {...state,isError:true,isLoading:false}
        default:
            return state;
    }
}