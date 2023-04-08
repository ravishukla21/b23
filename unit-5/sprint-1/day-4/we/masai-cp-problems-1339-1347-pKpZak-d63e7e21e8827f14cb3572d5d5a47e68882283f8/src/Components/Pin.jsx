import React, {forwardRef}from "react";

export const Pin = forwardRef(({ maxChar, onChangefun,backspacehandler }, ref) => {

  const handlekeyup=(e)=>{
      console.log(e)
      if(e.keyCode ===8){
     backspacehandler(e);

      }else{  
          onChangefun(e)

      }

  }
  return <input data-testid="pin-input" ref={ref}
  maxChar={maxChar}
     // onChange={onChangefun}

     onKeyUp={handlekeyup}





 />;
})

// Check maxChar prop here
