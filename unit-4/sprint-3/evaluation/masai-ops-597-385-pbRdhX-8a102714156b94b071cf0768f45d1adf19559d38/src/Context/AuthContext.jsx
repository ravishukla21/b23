import { useState } from "react";
import { createContext } from "react";
export const AuthContext=createContext();

function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false);
    const login=()=>{
        setisAuth(true)

    }
    console.log("hello")
    const logout=()=>{
        setisAuth(false)
    }
    // hello
    return <AuthContext.Provider value={{login,logout,isAuth}}>{children}</AuthContext.Provider>;
    
}

export default AuthContextProvider;
