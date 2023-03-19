import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  console.log(email, password, "pass")
  const handlesubmit = (e) => {
    e.preventDefault();
    const userData = {
      email, password

    }

    console.log(userData, "userdata");
    setEmail("");
    setPassword("");

  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" name="email" placeholder="ENTERemail" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="password" placeholder="ENTERpassword" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">add</button>

      </form>

    </div>
  )
}

export default Login