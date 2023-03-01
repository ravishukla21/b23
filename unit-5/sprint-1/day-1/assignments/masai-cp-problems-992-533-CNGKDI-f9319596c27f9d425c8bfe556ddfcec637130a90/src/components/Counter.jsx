import {useState} from "react";


export default function Counter(props){
    const [count,setcount] =useState(0);
    //console.log(props,"props")
    const handleClick=(count,val)=>{
        console.log(count,val,"val")
        console.log(count+val)
        setcount(count+val)


    }
    const handlemul=(count,val)=>{
        setcount(count*val)
    }

    return(
        <div>
             
            <h3 data-testid="counter-header" >{count}</h3>
           
            <button  textContent="+" data-testid="add-btn" onClick={()=>{handleClick(count,+1)}}>+</button>
            <button textContent="-"  data-testid="subtract-btn"  onClick={()=>{handleClick(count,-1)}}>-</button>
            <button data-testid="double-btn"  onClick={()=>{handlemul(count,2)}}>Double</button>

        </div>


    )
   
}