import React from 'react'
import { Dashboard } from './Components/Dashboard'
import { useContext } from 'react'

import { ThemeContext } from './Context/ThemeContextProvider'



export default function App() {
  const {isDarktheme}=useContext(ThemeContext)
  console.log(isDarktheme,"hihi")


  return (
    <div  >
        <Dashboard />
        
    </div>
  )
}
