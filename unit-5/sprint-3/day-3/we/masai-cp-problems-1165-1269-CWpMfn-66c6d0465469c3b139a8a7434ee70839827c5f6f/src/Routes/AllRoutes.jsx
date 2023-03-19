import { Routes, Route } from "react-router-dom"

import React from 'react'
import CoffeeData from "../Components/CoffeeData"
import RestaurantData from "../Components/RestaurantData"
import EmployeeData from "../Components/EmployeeData"

const AllRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path="/coffee-data" element={<CoffeeData/>}>

                </Route>
                <Route path="/restaurant-data" element={<RestaurantData />}>

                </Route>
                <Route path="/employee-data" element={<EmployeeData />}>

                </Route>
            </Routes>


        </div>
    )
}

export { AllRoutes }
