import React from "react";
import { forwardRef } from "react"
// forwardRef(

export  const Pin =forwardRef( ({ maxChar ,handelChange,forBackSpace},ref) => {
  const handelKeyup=(e)=>{
    if(e.keyCode===8){
    forBackSpace(e)
    }else{
    handelChange(e) 
    }
     }
  return <input data-testid="pin-input" maxLength={maxChar}  ref={ref}  onKeyUp={handelKeyup} />;
}
)
// export default Pin

// Check maxChar prop here
