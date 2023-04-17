import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionTypes";
const Initialstate={
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}




export const reducer = (state=Initialstate,{type,payload}) => {
  // complete the reducer
  switch(type){
    case LOGIN_REQUEST:
      return {...state,isLoading:true,isError:false,isAuth:false}
    case LOGIN_SUCCESS:
      return {...state,isLoading:false,isError:false,token:payload,isAuth:true}
    case LOGIN_FAILURE:
      return {...state,isLoading:false,isError:true,isAuth:false,token:""}
    default:
      return state;
  }
};
