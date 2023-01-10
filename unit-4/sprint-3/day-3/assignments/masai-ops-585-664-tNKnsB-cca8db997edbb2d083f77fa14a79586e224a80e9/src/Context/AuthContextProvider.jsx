import React from 'react'
import {useState,createContext} from "react"


export const AuthContext =createContext();



const AuthContextProvider = ({children}) => { 
    const [isAuth,setAuth]=useState(false)

    const login=()=>{
        setAuth(true)  
    }

  return (
    <div>
<AuthContext.Provider value={{isAuth,login}}>
    {children}
</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider

