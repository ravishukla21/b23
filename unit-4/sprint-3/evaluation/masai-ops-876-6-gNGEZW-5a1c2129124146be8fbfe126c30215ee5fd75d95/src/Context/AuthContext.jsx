import { createContext,useState } from "react";
export const AuthContext=createContext();

function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false)
    const [token,settoken]=useState("")
    const login=(token)=>{
        setisAuth(true)
        settoken(token)
    }
    const logout=()=>{
        setisAuth(false)

    }
    return(
        <AuthContext.Provider value={{isAuth,login,logout,token}}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthContextProvider;
