import { useSelector } from "react-redux";

export const WatchListPage = () => {   
  const store=useSelector((store)=>store.watchListReducer)
  const {watchList}=store;
  console.log(watchList,"insidewatchlist")
  
  return (
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",margiin:"auto",gap:"20px"}}>
    {watchList?.map((el,index)=> <div data-testid="watch-list" key={index}
    
    >
    <img className="match-image" style={{width:"100%"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqi_pk1a5hwTqklXwZhqlcTXd5TntciEC_5spF-qCwCQ&usqp=CAU&ec=48665701"} alt={el.id}></img>
    <p className="competition-name">{el.competition}</p>
    <p className="match-year">{el.year}</p>
    <p className="team-1">{el.team1}-{el.team1goals}</p>
    <p className="team-2">{el.team2}-{el.team2goals}</p>
    
    
    </div> )}
     
    </div>
  );
};

