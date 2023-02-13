import AuthContextProvider from "../Context/AuthContext";
import React from 'react'
import {useContext} from "react"
// import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'
function Login() {
  const {isAuth,login}=useContext(AuthContext)
    if(isAuth){
        return <Navigate to="/"/>
    }
  return (
    <div>
      <form data-testid="login-form" onSubmit={login}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
