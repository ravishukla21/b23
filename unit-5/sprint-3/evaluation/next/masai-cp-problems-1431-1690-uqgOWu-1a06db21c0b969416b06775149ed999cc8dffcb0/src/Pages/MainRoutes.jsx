import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";

export const MainRoutes = () => {
  return <Routes>{/* Provide all Routes here */}
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  
  
  </Routes>;
};
