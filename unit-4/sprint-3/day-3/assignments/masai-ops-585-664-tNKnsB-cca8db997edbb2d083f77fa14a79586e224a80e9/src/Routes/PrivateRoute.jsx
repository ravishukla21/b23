import React from 'react'
import {Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';


const Privatecontext = ({children}) => {
    const {isAuth}=useContext(AuthContext)
console.log(isAuth)
    if(!isAuth){
return <Navigate to="/login"/>
    }
  return children
 
}

export default Privatecontext