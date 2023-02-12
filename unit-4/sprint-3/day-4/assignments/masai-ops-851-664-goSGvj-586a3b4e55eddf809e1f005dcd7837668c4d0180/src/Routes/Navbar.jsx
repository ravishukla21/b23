import { Link } from "react-router-dom"
const Links = [
    { to: "/login", title: "Login" },
{ to: "/", title: "Home" },
{ to: "/about", title: "About" },
{ to: "/contact", title: "Contact" },
{ to: "/products", title: "Products" },
]
function Navbar() {
    return (
        <div className="navbar" >
            {Links.map((el)=>{
                return <Link key={el.to} to={el.to} >{el.title}</Link>
            })}

        </div>
    )
}

export { Navbar }