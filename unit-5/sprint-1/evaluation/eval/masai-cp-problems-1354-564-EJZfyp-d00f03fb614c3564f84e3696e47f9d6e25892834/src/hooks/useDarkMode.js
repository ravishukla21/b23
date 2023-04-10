import {useState} from "react";

const useDarkMode = () => {

    const [isDarkMode,settoggle]=useState(false)
 
    const toggleDarkMode=()=>{
      settoggle(!isDarkMode);
    
    }
    if(isDarkMode){
      document.body.classList.remove("dark-mode")
  
    }else{
      document.body.classList.add("dark-mode")
  
    }

    return [isDarkMode,toggleDarkMode]




};   

export default useDarkMode;
