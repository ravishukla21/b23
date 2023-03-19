import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div style={{margin:"20px"}}>
        <h1>Navbar</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>LOGIN</Link>
        <Link to={"/admin"}>ADMIN</Link>
       
        
        





    </div>
  )
}

export default Navbar