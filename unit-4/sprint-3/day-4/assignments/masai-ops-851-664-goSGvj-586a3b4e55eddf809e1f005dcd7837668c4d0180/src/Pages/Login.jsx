import React from 'react'
import {useContext} from "react"
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const {isAuth,login}=useContext(AuthContext)
    if(isAuth){
        return <Navigate to="/"/>
    }
    
    return (
        <div>
            <form className = "auth_form" onSubmit={login} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}