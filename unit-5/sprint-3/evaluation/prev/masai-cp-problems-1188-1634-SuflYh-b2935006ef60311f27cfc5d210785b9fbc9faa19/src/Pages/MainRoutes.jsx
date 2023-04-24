import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { StudentDetail } from "./StudentDetail";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path={`/students/:id`} element={
      
      <PrivateRoute>
      <StudentDetail />
      </PrivateRoute>
    
    
    }> </Route>

  </Routes>;
};
