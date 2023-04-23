import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getauthfailureaction, getauthrequestaction, getauthsuccessaction, handleAdd, handleAddlogin } from '../redux/AuthReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const store = useSelector(store => store.AuthReducer)
  console.log(store, "storelogin")
  // useEffect(() => {  dispatch(handleAdd(email,password )) }, [])
  // dispatch(handleAdd(email,password ))
  const navigate=useNavigate();
  const location=useLocation();
  const handleAdd=()=>{
    dispatch(handleAddlogin(email,password )).then(()=>{
      console.log("promise")
      navigate(location.state)
    })
  }


  return (
    <div>LOGINPAGE

      <div><input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
        <button onClick={handleAdd}>ADD TODO</button>

      </div>



    </div>
  )
}

export default Login    