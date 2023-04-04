import React, { useState } from 'react'

const Counter = ({initialvalue}) => {

    console.log(initialvalue,"initialvalue")
    const [initialvalue1,setinitaialvalue]=useState(initialvalue)
    const handleClick=(val)=>{

        
        setinitaialvalue(initialvalue1+val)

    }
    const handleClick12=(val)=>{
       
        setinitaialvalue(initialvalue1*val)
    }
  return (
    <div>
    <h2 data-testid = "counter-header">Counter</h2>
    <h3 data-testid = "count">{initialvalue1}</h3>


     <button data-testid = "add-btn"  onClick={()=>handleClick(1)}>+</button>
     <button data-testid = "subtract-btn" onClick={()=>handleClick(-1)}>-</button>
     <button data-testid = "double-btn" onClick={()=>handleClick12(2)}>Double</button>



    
    
    
    
    </div>
  )
}

export default Counter