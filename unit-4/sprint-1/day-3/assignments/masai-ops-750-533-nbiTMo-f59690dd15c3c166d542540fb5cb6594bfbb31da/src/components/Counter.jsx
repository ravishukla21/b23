import { useState } from "react"
export  default function Counter(prop){
    const[value,setValue]= useState(0)
    const hello=()=>{setValue(value*2)}
    const hello1=()=>{setValue(value+1)}
    const hello2=()=>{setValue(value-1)}
    return(
        <>
        <h2 data-testid="counter-header">Counter</h2>
        <h3 data-testid="count">{value}</h3>
        <button onClick={hello1} data-testid="add-btn">+</button>
        <button onClick={hello2} data-testid="subtract-btn">-</button>
        <button onClick={hello} data-testid="double-btn">Double</button>

        
        </>
    )
}