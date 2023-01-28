import React, {Children, useState} from 'react';
import { createContext } from 'react';
export const AuthContext=createContext();

export default function AuthContextProvider({Children}) {

  const [isAuth,setIsAuth]=useState(false);
  const login=()=>{
    setIsAuth(true)
  }
  const logout=()=>{
    setIsAuth(false)
  }

  return (
   <AuthContext.Provider value={{isAuth,login,logout}}>
    {Children}
   </AuthContext.Provider>
  )
}
