import { GET_MATCH_REQUEST,GET_MATCH_SUCCESS,GET_MATCH_FAILURE } from "./actionTypes";
const Initialstate={
  isLoading: false,
  isError: false,
  matches: [],
}


export const reducer = (state=Initialstate,{type,payload}) => {
  // Complete the logic
  switch(type){
    case GET_MATCH_REQUEST:
      return {...state,isLoading:true,isError:false}
    case GET_MATCH_SUCCESS:
      return {...state,isLoading:false,matches:payload}
    case GET_MATCH_FAILURE:
      return {...state,isLoading:false,isError:true}
    default:
      return state;
  }
};
