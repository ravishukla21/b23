import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return <BrowserRouter>
<NavBar/> 
<Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
  </BrowserRouter>;
}

export default App;
