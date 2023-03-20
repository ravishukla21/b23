import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { StudentCard } from "../Components/StudentCard";
import { StudentList } from "../Components/StudentList";
import { Homepage } from "../Pages/Homepage";
import { Login } from "./Login";
import { StudentDetail } from "./StudentDetail";

export const MainRoutes = () => {
  return <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={

      <Login />



    } />
    <Route path="/student/:id" element={
      <PrivateRoute>
        <StudentDetail />

      </PrivateRoute>


    } />

  </Routes>;
};
