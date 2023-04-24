import {useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";




export const PrivateRoute = ({children}) => {
  const location=useLocation()

  const store=useSelector((store)=>store.authReducer.isAuth)
  console.log(store,"isauth")
  return store?children:<Navigate to={"/login"}   
  state={location.pathname} replace/>
  
  
  
};
