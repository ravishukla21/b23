import React from "react";
import { useEffect, useState, useRef } from "react";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [input] = useState(new Array(length).fill("qq"));
  const [inputboxvalue] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    console.log(inputRef)

  })

  const onChangeHandler = (e, index) => {
    inputboxvalue[index] = e.target.value;
    console.log(inputboxvalue)
    if (index < length - 1 && e.target.value.length > 0) {

      inputRef.current[index + 1].focus();

    }
    setOtp(inputboxvalue.join(''))



  };
  const backspacehandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();

    }

    inputboxvalue[index] = e.target.value;
    console.log(inputboxvalue)
    setOtp(inputboxvalue.join(''))


  }
  const handlepasteevent = (e) => {

    console.log(e.clipboardData.getData("text"));
    const data = e.clipboardData.getData("text").split("").filter((item, index) => index < length);

    data.forEach((item, index) => {
      inputboxvalue[index] = item;
      inputRef.current[index].value = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }

    })

    setOtp(inputboxvalue.join(""))

  };

  return <div data-testid="pin-tab" onPaste={handlepasteevent}>
    {input.map((item, index) => {
      return <Pin ref={(element) => {
        console.log(element)
        inputRef.current[index] = element;

      }}

        key={index}

        maxLength={maxChar}
        onChangefun={(e) => onChangeHandler(e, index)}
        backspacehandler={e => backspacehandler(e, index)}



      />

    }

    )}



  </div>
};

// Check length and maxChar props here
