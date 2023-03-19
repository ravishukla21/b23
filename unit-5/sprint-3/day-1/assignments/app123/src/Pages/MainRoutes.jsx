import React from 'react';
import {Routes,Route} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute';
import Admin from './Admin';
import Homepage from './Homepage';
import Login from "./Login"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={
            <PrivateRoute>
                 <Admin/>

            </PrivateRoute>
       
        
        }></Route>
        <Route path="/sumit" element={<Login/>}></Route>
        <Route path="*" element={<h1>404 error page not found</h1>}></Route>
    </Routes>
  )
}

export default MainRoutes