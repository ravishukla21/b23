import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      pass
    }
    console.log(payload);

    fetch("https://tan-grumpy-rooster.cyclic.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then((res) => res.json())
        .then((data) => {
          // we need the token for the authentication & to perform CRUD operation if needed
  
          console.log(data)
          // console.log(data.token)
          localStorage.setItem("token",data.token)
        })
        .catch((err) => console.log(err))
  

    setEmail("")
    setPass("")

}

  return (
    <div>
    <h2>Login Form</h2>

    <label htmlFor="">Email : </label>
    <br />
    <input type="email" name='email' value={email} placeholder='Enter your email id here' onChange={(e) => setEmail(e.target.value)} />
    <br />
    <br />
    <label htmlFor="">Password : </label>
    <br />
    <input type="password" name='password' placeholder='Enter your password here' value={pass} onChange={(e) => setPass(e.target.value)} />
    <br />
    <br />
    <button onClick={handleSubmit}>Login</button>
  </div>
  )
}

export default Login