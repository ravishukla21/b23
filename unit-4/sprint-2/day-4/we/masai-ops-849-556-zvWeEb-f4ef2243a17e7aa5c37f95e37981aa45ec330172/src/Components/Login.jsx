import React from 'react'
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContextProvider"
import { Dashboard } from "./Dashboard"
export default function Login() {
    const { isAuth, login } = useContext(AuthContext)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [token, settoken] = useState("")

    const handlechange = (e) => {
        e.preventDefault();
        const obj = {
            email, password
        }
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(obj),

        }).then((res) => res.json()).then((data) => {
            console.log(data.token)
            login(data.token)
            settoken(data.token)
        }).catch((err) => console.log("err"))
    }
    if (isAuth) {
        return <Dashboard />
    }



    return (
        <div>
            <form data-testid="auth_form" onSubmit={handlechange} >
                <input
                    type="email"
                    data-testid="email"
                    placeholder="Enter Email"
                    onChange={(e)=>setemail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    data-testid="password"
                    placeholder="Enter password"
                    onChange={(e)=>setpassword(e.target.value)}
                />
                <br />
                <input type="submit" />

            </form>
        </div>
    )
}
