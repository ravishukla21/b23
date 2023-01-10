import { useState } from "react";
import { createContext } from "react";
export const AuthContext=createContext();

function AuthContextProvider({Children}) {
    const [isAuth,setisAuth]=useState(false);
    const login=()=>{
        setisAuth(true)

    }
    console.log("hello")
    const logout=()=>{
        setisAuth(false)
    }
    // hello
    return <AuthContext.Provider value={{login,logout,isAuth}}>{Children}</AuthContext.Provider>;
    
}

export default AuthContextProvider;
