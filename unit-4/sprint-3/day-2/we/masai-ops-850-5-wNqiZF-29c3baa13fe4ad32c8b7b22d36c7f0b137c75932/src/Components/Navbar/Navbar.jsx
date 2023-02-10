import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
function Home() {
  return (<>
    <h1>Home Page</h1>
  </>)
}
function Contact() {
  return (<>
    <h1>Contact Page</h1>
  </>)
}
function About() {
  return (<>
    <h1>About Page</h1>
  </>)
}
function Services() {
  return (<>
    <h1>Services Page</h1>
  </>)
}
function Login() {
  return (<>
    <h1>Login Page</h1>
  </>)
}

function NavBar() {
  return (
    <>
      {/* add your links */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/login">Login</Link>

      </div>
      <Routes>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/about-us" element={<About />}> </Route>
        <Route path="/services" element={<Services />}> </Route>
        <Route path="/login" element={<Login />}> </Route>

      </Routes>


    </>
  )
}

export default NavBar
