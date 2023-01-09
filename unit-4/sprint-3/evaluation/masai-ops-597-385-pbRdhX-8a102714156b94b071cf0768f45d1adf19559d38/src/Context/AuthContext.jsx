import React from "react";
//import { Children } from "react";
import { createContext } from "react";

export const AuthContext=createContext();


function AuthContextProvider({Children}) {
    // const [isAuth,setisAuth]=useState(false);
    // const login=()=>{
    //     setisAuth(true)

    // }
    // const logout=()=>{
    //     setisAuth(false)
    // }
    return <AuthContext.Provider value="BATMAN">{Children}</AuthContext.Provider>;
    
}

export default AuthContextProvider;
