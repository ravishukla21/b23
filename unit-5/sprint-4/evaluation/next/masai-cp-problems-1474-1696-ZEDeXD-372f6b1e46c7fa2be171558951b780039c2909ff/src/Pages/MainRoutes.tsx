import React from "react";
import {Routes,Route} from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddBook } from "./AddBook";

export const MainRoutes = () => {
  return <div>
    <Routes>


      <Route path={"/"} element={<HomePage/>}></Route>

      <Route path={"/add-book"} element={<AddBook/>}></Route>
    </Routes>




  </div>;
};
