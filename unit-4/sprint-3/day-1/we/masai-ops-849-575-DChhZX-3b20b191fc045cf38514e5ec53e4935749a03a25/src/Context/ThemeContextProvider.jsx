import { createContext,useState } from 'react'
//cpc

export const ThemeContext=createContext()


export default function ThemeContextProvider({children}) {
  const [isDarkTheme,setisDarktheme]=useState(false)
  const toggletheme=()=>{
    setisDarktheme(!isDarkTheme)
  }
  
 

  return (
    <ThemeContext.Provider value={{isDarkTheme:isDarkTheme,toggletheme:toggletheme}}>
       {children}
    </ThemeContext.Provider>
     
  )
}

