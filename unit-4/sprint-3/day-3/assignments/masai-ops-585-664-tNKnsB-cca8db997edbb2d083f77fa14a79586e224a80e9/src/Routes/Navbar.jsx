import {NavLink} from "react-router-dom"

const arr1=[
    {path:"/login",title:"Login"},
    {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/contact",title:"Contact"},
   
    {path:"/products",title:"Products"},
]
function Navbar() {
    const active={
        textDecoration:"none", color:"green"
    }
    const deactive={textDecoration:"none", color:"black"}

    return(
        <div className = "navbar" style={{display:"flex" ,justifyContent:"space-evenly" ,backgroundColor:"Pink",padding:"10px"}}>
{arr1.map((el)=>{
    return <NavLink style={({isActive})=>{
        return isActive ?active:deactive
    }} to={el.path} >{el.title}</NavLink>
})}
        </div>
    )
}

export { Navbar }