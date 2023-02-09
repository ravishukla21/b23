// import { Children } from "react";
import { createContext } from "react";
import {useState} from "react";

export const AppContext=createContext();



export const Hello=({children})=>{
    const [theme,settheme]=useState("dark")
    const toggletheme=()=>{settheme(theme==="light"?"dark":"light")}

    return (
        <>
        <AppContext.Provider value={{theme,toggletheme}}>
            {children}
        </AppContext.Provider>
        </>
    )
}