import React from "react";
import {Route,Routes} from "react-router-dom"
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login"

function AllRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
  </Routes>
  );
}

export default AllRoutes;
