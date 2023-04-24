import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { EditBook } from "./EditBook";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return <Routes>{/* Provide all Routes here */}
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/edit-book/:id" element={
    <PrivateRoute>
    <EditBook data />
    
    </PrivateRoute>
    
  
  }></Route>
  
  
  </Routes>;
};

// "/edit-book/:id"
