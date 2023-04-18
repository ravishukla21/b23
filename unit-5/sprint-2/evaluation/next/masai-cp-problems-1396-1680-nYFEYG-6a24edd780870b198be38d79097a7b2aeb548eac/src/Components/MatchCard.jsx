import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {  addwatchlist } from "../Redux/WatchList/action";

export const MatchCard = ({id,competition,year,team1,team2,team1goals,team2goals}) => {
  const dispatch=useDispatch();
  const store=useSelector((store)=>store.watchListReducer)
  // console.log(store.watchList,"watchlistreducerchecking")

  const handleClick=(data)=>{
    // console.log(data,"watchlistidcheckit")
     dispatch(addwatchlist(data))

  }
  return (
    <div className="match-card">
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      <img className="match-image" style={{width:"100%"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqi_pk1a5hwTqklXwZhqlcTXd5TntciEC_5spF-qCwCQ&usqp=CAU&ec=48665701"} alt={id}></img>
      <p className="competition-name">{competition}</p>
      <p className="match-year">{year}</p>
      <p className="team-1">{team1} - {team1goals}</p>
      <p className="team-2">{team2} - {team2goals}</p>
      <button className="add-to-watchlist" onClick={()=>handleClick({id,competition,year,team1,team2,team1goals,team2goals})}>watchList</button>

    </div>
  );
};
