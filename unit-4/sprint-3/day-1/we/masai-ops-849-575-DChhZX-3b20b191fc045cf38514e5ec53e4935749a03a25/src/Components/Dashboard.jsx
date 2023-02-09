import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import data from "../db.json"
import User from "../Components/User"


export const Dashboard = () => {
    const {isDarkTheme,toggletheme,setisDarktheme} =useContext(ThemeContext)
    console.log(isDarkTheme,toggletheme)
   
    return (
        <div data-testid = "dashboard-cont" style={{background:isDarkTheme?"black":"white",color:isDarkTheme?"white":"black"}} >
            <select  data-testid = "select-theme" onChange={toggletheme}>
                
                <option >Light Theme</option>
                <option  >Dark Theme</option>
            </select>
            {data?.map((el)=>{return <User key={el.id} user={el} isDarkTheme={isDarkTheme}/>})}


            {/* map through the users and render User component */}
        </div>
)
}
