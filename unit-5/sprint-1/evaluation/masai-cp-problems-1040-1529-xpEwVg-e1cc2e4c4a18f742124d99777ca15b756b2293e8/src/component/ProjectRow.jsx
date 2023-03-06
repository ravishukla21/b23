import React from "react";
import { useState } from "react";

export const ProjectRow = (props) => {
  const {name,tech_stack,assigned_to,currentstatus}=props;
  const [handle,sethandle]=useState(currentstatus);

  const handle123=()=>{
    if(handle=="pending"){
      sethandle("completed")
    }
    if(handle=="completed"){
      sethandle("reviewed")
    }
  };

  console.log(handle,"handle")


  return (
    <>
      <td data-testid="project-id">1</td>
      <td data-testid="project-name">{name}</td>
      <td data-testid="project-tech-stack">{tech_stack}</td>
      <td data-testid="project-assigned-to">{assigned_to}</td>
      <td data-testid="project-status">
        {/* Show the current status value */}
        {handle}
      </td>
      <td>
        <button data-testid="toggle-button" disabled={handle=="reviewed"}  onClick={handle123}  >Toggle</button>
      </td>
    </>
  );
};
