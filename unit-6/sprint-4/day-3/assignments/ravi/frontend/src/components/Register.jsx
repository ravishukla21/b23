import React, { useState } from 'react'
import {useReducer } from 'react'
const initialState={
    name:"",
    email:"",
    pass:"",
    age:0
}
const reducer=(state,{type,payload})=>{
    switch(type){
        case "name":
            return {...state,name:payload}
            case "email":
                return {...state,email:payload}
                case "pass":
                    return {...state,pass:payload}
                    case "age":
                        return {...state,age:payload}
                        case "default":
                            return initialState
                        default:
                            return state
    }
}

const Register = () => {
    const [data,dispatch]=useReducer(reducer,initialState)


  
const formSubmit=(e)=>{
    e.preventDefault()
fetch("https://easy-puce-leopard-boot.cyclic.app/user/register",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
}).then((res)=>res.json()).then((res)=>console.log(res)).catch((er)=>console.log(er))

    dispatch({type:"default"})

}

  return (
    <div>
        <h1>Register User</h1>
        <form action="" onSubmit={formSubmit}>
            <input type="text" placeholder='name' value={data.name} onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}/> <br />
            <input type="email" placeholder='email' value={data.email} onChange={(e)=>{dispatch({type:"email",payload:e.target.value})}}/><br />
            <input type="password" placeholder='pass' value={data.pass} onChange={(e)=>{dispatch({type:"pass",payload:e.target.value})}}/><br />
            <input type="text" placeholder='age' value={data.age} onChange={(e)=>{dispatch({type:"age",payload:e.target.value})}}/><br />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Register