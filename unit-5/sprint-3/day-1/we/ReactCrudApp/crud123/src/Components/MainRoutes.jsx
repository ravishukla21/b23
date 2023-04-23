import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Admin from '../Pages/Admin';
import EditProducts from '../Pages/EditProducts';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/admin" element={
        <PrivateRoute>

          <Admin />

        </PrivateRoute>

      }></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path={`/products/:id`} element={
        <PrivateRoute>
          <EditProducts />

        </PrivateRoute>
      }> </Route>
    </Routes>
  )
}

export default MainRoutes   