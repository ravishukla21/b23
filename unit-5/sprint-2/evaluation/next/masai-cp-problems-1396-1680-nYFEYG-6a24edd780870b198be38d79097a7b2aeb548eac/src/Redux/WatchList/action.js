import axios from "axios";
import { ADD_TO_WATCHLIST } from "./actionTypes";

export const addwatchlist=(data)=>(dispatch)=>{
    // axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches/${id}`).then((res)=>
    // {
    //     console.log(res.data,"watchlistkaaction")
        
    //     dispatch(addtowatchlistaction(res.data))}
    // )

    if(data){
        dispatch(addtowatchlistaction(data))
    }



}



export const addtowatchlistaction=(value)=>{


    return{type:ADD_TO_WATCHLIST,payload:value}
}


