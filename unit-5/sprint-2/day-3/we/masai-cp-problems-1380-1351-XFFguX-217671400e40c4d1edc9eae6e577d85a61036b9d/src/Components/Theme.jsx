import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { handleTheme } from '../Redux/action';

const Theme = () => {
    const dispatch=useDispatch();
    const store=useSelector(store => store.themeReducer)
    console.log(store,"storetheme")

    const handleClick=(val)=>{

        dispatch(handleTheme(val))

    
    
    
    }
  return (
    <div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <div>
    <button onClick={()=>handleClick("light")} disabled={store.theme=="light"} >Switch to Light</button>
    
    </div>
    <div>
    <button onClick={()=>handleClick("dark")}disabled={store.theme=="dark"}  >Switch to Dark</button>
    
    </div>
    
    </div>
    
    </div>
  )
}

export default Theme