import { useState } from "react";
import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux"
import { allaboutlogin } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {   
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const dispatch=useDispatch();
  const store=useSelector(store=>store.authReducer)
  console.log(store,"storecheckedd")
  const navigate=useNavigate()
  const location=useLocation()

  const handleSubmit=()=>{
    const initialstate={email,password}
    console.log(initialstate,"initiastate")
    dispatch(allaboutlogin(initialstate)).then(()=>{
      navigate(location.state)
 
    })



  }

  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email"  onChange={(e)=>setemail(e.target.value)} value={email} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password" onChange={(e)=>setpassword(e.target.value)} value={password}
      />
      <button data-testid="user-login" onClick={handleSubmit}>Log In</button>
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
