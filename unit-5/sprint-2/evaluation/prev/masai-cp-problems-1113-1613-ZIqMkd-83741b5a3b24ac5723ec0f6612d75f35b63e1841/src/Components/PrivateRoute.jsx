import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) => {
const store=useSelector((store)=>store.authReducer.isAuth)

console.log(store,"isAuth")


  return <>
  {/* Complete this higher order component  */}
  {store?children:<Navigate to="/login"/>}

  
  
  
  
  </>;
};
