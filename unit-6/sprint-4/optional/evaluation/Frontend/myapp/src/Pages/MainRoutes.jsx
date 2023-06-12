import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Posts from '../Components/Posts';
const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login/>}> </Route>
    <Route path="/signup" element={<Signup/>}> </Route>
    <Route path="/posts" element={<Posts/>}> </Route>
    
    
    </Routes>
  )
}

export default MainRoutes