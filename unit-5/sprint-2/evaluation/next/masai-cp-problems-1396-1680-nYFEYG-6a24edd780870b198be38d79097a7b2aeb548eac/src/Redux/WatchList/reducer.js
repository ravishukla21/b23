import { ADD_TO_WATCHLIST } from "./actionTypes";
const Initialstate={
  watchList: [],
}


export const reducer = (state=Initialstate,{type,payload}) => {
  switch(type){
    case ADD_TO_WATCHLIST:
      return {...state,watchList:[[...state.watchList,payload]]}
    default:
      return state
  }
  // Complete the logic
};
