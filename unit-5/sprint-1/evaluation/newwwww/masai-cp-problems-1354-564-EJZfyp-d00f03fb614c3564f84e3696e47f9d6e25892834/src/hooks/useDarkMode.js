
import {useState} from "react";

const useDarkMode = () => {


    const [isDarkMode,settoggle]=useState(false)
 
    const toggleDarkMode=()=>{
      settoggle(!isDarkMode);
    
    }
    return [isDarkMode,toggleDarkMode]


};    

export default useDarkMode;
