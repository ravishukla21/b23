import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const PrivateRoute = ({children}) => {    
  const {isAuth}=useSelector((store)=>store.authReducer)
  console.log(isAuth,"privateroute")
  return isAuth?children:<Navigate to="/login" />;
};
