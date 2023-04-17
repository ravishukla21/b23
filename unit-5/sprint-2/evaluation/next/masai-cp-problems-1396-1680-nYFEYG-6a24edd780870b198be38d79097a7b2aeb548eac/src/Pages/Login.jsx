import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import styled from "styled-components";
import { login } from "../Redux/Authentication/action";

export const Login = () => {   
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const dispatch=useDispatch();
  const store=useSelector(store=>store.authReducer);
  console.log(store,"authstore")
  const handleClick=()=>{
    const inputdata={
      email,password
    }
    
    console.log(inputdata,"e,mailpassword")
    dispatch(login(inputdata))
  }
  //
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" 
      value={email}
      onChange={(e)=>setemail(e.target.value)}/>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleClick}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
