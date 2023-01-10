import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Contact from '../Pages/Contact'
import Products from "../Pages/Products"
import Privatecontext from './PrivateRoute'




const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products" element={<Privatecontext><Products/></Privatecontext>}/>
            </Routes>
        </div>
    )
}

export {AllRoutes}