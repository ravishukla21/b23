import React from "react";
import {useState,useEffect,useRef} from "react"
import PropTypes from "prop-types"

import { Pin } from "./Pin";


export const PinTab = ({ length, maxChar, setOtp }) => {
  const [myInput]=useState(new Array(length).fill("0"))
  const [otpValue]=useState(new Array(length).fill("0"))
const inputRef=useRef([])

const handelChange=(e,index)=>{
  otpValue[index]=e.target.value

  if(index<length-1 && inputRef.current[index].value.length===maxChar ){
      inputRef.current[index+1].focus()
  }
  setOtp(otpValue.join(""))
}


const forBackSpace=(e,index)=>{
  otpValue[index]=e.target.value

  if(index >0 && inputRef.current[index].value.length===0 ){
      inputRef.current[index-1].focus()
  }
  setOtp(otpValue.join(""))
}


useEffect(()=>{
  inputRef.current[0].focus()
},[])
  return <div data-testid="pin-tab">{/* Add Pin component here  */}
  {myInput.map((el,index)=>{
             return <Pin key={index} maxChar={maxChar} ref={(ele)=>{inputRef.current[index]=ele}} handelChange={(e)=>handelChange(e,index)} forBackSpace={(e)=>forBackSpace(e,index)}/>

            // <Pin key={index} maxchar={maxchar} ref={(ele)=>{inputRef.current[index]=ele}} handelChange={(e)=>handelChange(e,index)}/>
            
        })}</div>;
};

PinTab.propTypes={
  length:PropTypes.number.isRequired,
  maxChar:PropTypes.number.isRequired,
}

// Check length and maxChar props here