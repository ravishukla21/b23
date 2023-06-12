import React, { useState } from 'react'
import { useReducer } from 'react'

const initialState={
    email:"",
    pass:""
}


const Login = () => {
    const [data,setData]=useState(initialState)

    const handelChange=(e)=>{
        const {value,name}=e.target
setData({...data,[name]:value})

    }
const {email,pass}=data

    const handelSubmit=(e)=>{
        e.preventDefault()
        fetch("https://easy-puce-leopard-boot.cyclic.app/user/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json())
        .then((res)=>{
            localStorage.setItem("token", res.token)
            console.log(res.token)
        }).catch((er)=>console.log(er))
setData(initialState)
    }
  return (
    <div>
        <h1>LOGIN</h1>
        <form onSubmit={handelSubmit}>
            <input type="email"  value={email} name="email" onChange={handelChange}/><br />
            <input type="password" value={pass} name="pass" onChange={handelChange} />
            <input type="submit" />
        </form>


    </div>
  )
}

export default Login