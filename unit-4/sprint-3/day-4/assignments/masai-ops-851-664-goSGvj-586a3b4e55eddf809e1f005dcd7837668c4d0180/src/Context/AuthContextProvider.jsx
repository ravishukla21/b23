import {createContext,useState} from "react"
export const AuthContext=createContext()

const AuthContextProvider=({childern})=>{
    const [isAuth,setAuth] =useState(false)
    const login=()=>{
    setAuth(true)

    }
    const logout=()=>{
        setAuth(false)
    }
    return(
        <AuthContext.Provider value={{isAuth,logout,login}}>
            {childern}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider