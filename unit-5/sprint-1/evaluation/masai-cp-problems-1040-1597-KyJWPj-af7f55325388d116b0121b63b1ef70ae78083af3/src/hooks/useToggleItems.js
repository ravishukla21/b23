import {useState} from "react";


const useToggleItems = (initialValue,payload) => {
    const [state,setstate]=useState(initialValue);
    console.log(initialValue,state,typeof(payload),payload,"pay")

    // const [state, toggleState] = useToggleItems(["A", "B", "C", "D"], 1);

    let fun=()=>{
    // setstate(prev=>prev+position)

    payload++;
    console.log(payload);
    if(payload>initialValue.length-1){
        payload=0
    }


    setstate(initialValue[payload]);
    
    }

    return [state,fun]

};

export { useToggleItems };
