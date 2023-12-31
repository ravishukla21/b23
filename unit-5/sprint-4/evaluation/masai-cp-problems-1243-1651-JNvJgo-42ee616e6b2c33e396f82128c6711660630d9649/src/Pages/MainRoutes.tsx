import React from "react";
import {Routes,Route} from "react-router-dom"
import { AddProduct } from "./AddProduct";
import { HomePage } from "./HomePage";

export const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/add-product" element={<AddProduct/>}/>
    </Routes>
  </div>;
};
