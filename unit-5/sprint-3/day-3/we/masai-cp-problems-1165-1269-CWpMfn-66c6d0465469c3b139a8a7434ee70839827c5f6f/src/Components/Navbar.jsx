import {Link} from "react-router-dom";


function Navbar() {
    return(
        <div className = "navbar" >
            <Link to="/coffee-data">CoffeeData</Link>
            <Link to="/restaurant-data">RestaurantData</Link>
            <Link to="/employee-data">EmployeeData</Link>

            
        </div>
    )
}

export { Navbar }