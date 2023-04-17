import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { getMatches } from "../Redux/Matches/action";
import { MatchCard } from "./MatchCard";

export const MatchList = () => {
  const dispatch=useDispatch();
  const store=useSelector(store=>store.matchReducer)
  console.log(store,"matchliststore")
  const {isLoading,isError,matches}=store
  console.log(isLoading,isError,matches,"matchesisloadingiserror")
  
  useEffect(()=>{

     dispatch(getMatches())
  },[])
  return  (
    <div>
    <div>
    {isLoading && <h1>...Loading</h1>}
    {isError && <h1>...Error</h1>}
    
    </div>
    
    <div data-testid="match-list" style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto",margiin:"auto",gap:"20px"}}>{/* // Show matches here  */}
    {matches?.map((el,index)=>{
      return <div key={index} > <MatchCard {...el}/></div>
    })}
    
    
    
    </div>;
    
    </div>
  )  
  
  
  
  
  
  

  
  
  
  
};
