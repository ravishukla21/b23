import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Dashboard from "./Dashboard"
import SingleRestaurantPage from "./SingleRestaurantPage"
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />



        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="SingleResturantPage" element={<SingleRestaurantPage/>} />
        <Route path="/users/:user-id" element={<hi/> } />
      </Routes>

    </div>
  );
}

export default AllRoutes;
