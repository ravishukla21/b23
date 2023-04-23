import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {  
  const location=useLocation()
  const store=useSelector(store=>store.AuthReducer);
  console.log(store,"authreducer")
  const {isAuth}=store;
  return (
    <div>
    
    {isAuth?children:<Navigate to="/login" state={location.pathname}/>}
    </div>
  )
}

export default PrivateRoute  