import React, {useState} from 'react'
import {createContext} from "react"
export const AuthContext=createContext();

 function AuthContextProvider({children}) {
  const[isAuth,setisAuth]=useState(false)
  const [token,setToken]=useState("")

  const login=(token)=>{
    setisAuth(true)
    setToken(token)
  }

  const logout=()=>{
    setisAuth(false)
  }

  return (
    <div>
      <AuthContext.Provider value={{isAuth,logout,login,token}}>{children}</AuthContext.Provider>
    </div>
  )
}
export default AuthContextProvider
