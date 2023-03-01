import {useState} from "react";
import React from "react";


export default function Counter(props){

    const [initCount,setinitCount] = useState(0);

    //console.log(props,"props")

    // const handleClick=(count,val)=>{
    //     console.log(count,val,"val")
    //     console.log(count+val)
    //     setcount(count+val)


    // }
    // const handlemul=(count,val)=>{
    //     setcount(count*val)
    // }

    const handleAdd=(initCount,val)=>{
        setinitCount(initCount+val)

    }
    const handleSub=(initCount,val)=>{
        setinitCount(initCount+val)

    }
    const handlemul=(initCount,val)=>{
        setinitCount(initCount*val)

    }

    return(
        <div>
            <h2 data-testid="counter-header">Counter</h2>
             
            <h3 data-testid="count" >{initCount}</h3>
           
            <button   data-testid="add-btn" onClick={()=>{handleAdd(initCount,+1)}}>+</button>
            <button  data-testid="subtract-btn"  onClick={()=>{handleSub(initCount,-1)}}>-</button>
            <button data-testid="double-btn"  onClick={()=>{handlemul(initCount,2)}}>Double</button>

        </div>


    )
   
}