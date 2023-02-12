import React from 'react'
import {useContext} from "react"
import {AuthContext} from "../Context/AuthContextProvider"

export const Dashboard = () => {
    const {isAuth,token,logout}=useContext(AuthContext)
    return (
        <div >
            <h3 data-testid = "token" >{token}</h3>
            <button data-testid = "logout" onClick={logout}>LOGOUT</button>
        </div>
    )
}
