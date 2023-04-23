import React from 'react'
import Sidebar from '../Components/Sidebar'
import ProductList from '../Components/ProductList'

const Homepage    = () => {
  return (
    <div style={{display:"flex",gap:"20px",border:"1px solid red"}}>
    <div style={{border:"1px solid green",width:"15%"}}><Sidebar/></div>
    <div style={{border:"1px solid green",width:"82%"}}><ProductList/></div>
    
    </div>
  )
}

export default Homepage   