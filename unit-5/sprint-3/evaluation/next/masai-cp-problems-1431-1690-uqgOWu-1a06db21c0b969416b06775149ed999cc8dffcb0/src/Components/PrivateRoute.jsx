import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const auth=useSelector(store=>store.authReducer.isAuth)
  const location=useLocation()
  console.log(auth,"authinprivaterote")
  return <div>{auth?children:<Navigate to="/login" state={location.pathname}/>}</div>;
};
