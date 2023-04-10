import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = ({type,size,variant,value,onChange}) => {
  return <input data-testid="inputTag" />;   
};

export default Input;
  Input.propTypes={
  
  type:PropTypes.string.isRequired,
  size:PropTypes.string.isRequired,
  variant:PropTypes.string.isRequired,



 
  onChange:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,

  
  }
