import React from 'react';
import {Link} from "react-router-dom";


const Navbar  = () => {
  return (
    <div> 
    <Link to="/">HOMEPAGE</Link>
    <Link to="/admin">ADMINPAGE</Link>
    <Link to="/login">LOGINPAGE </Link>
    <Link to="/products/:id">EditProducts</Link>
    
    
    </div>
  
  )
}

export default Navbar 