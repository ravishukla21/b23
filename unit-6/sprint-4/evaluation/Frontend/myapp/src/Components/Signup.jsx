import React from 'react';
import { useState } from 'react';
// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean
const Signup = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [gender,setgender]=useState("");
    const [password,setpassword]=useState("");
    const [age,setage]=useState(Number);
    const [city,setcity]=useState("");
    const [is_married,setis_married]=useState(Boolean)
    const handleSubmit=()=>{
        const payload={
            name,email,gender,password,age,city,
            is_married
        }
        // http://localhost:4500/users/register
        console.log(payload)
        fetch("hhttps://weak-tan-piglet-hat.cyclic.app/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

        setname("")
        setemail("")
        setgender("")
        setpassword("")
        setage("")
        setcity("")
        setis_married("")
    }

  return (
    <div>Signup here 
    <br/>
    <br/>
    <label>username</label>
    <input type="text" name="username" value={name} onChange={(e)=>setname(e.target.value)}></input>
    <br/>
    <br/>
    <label>email</label>
    <input type="text" name="username" value={email} onChange={(e)=>setemail(e.target.value)}></input>
    <br/>
    <br/>
    <label>gender</label>
    <input type="text" name="username" value={gender} onChange={(e)=>setgender(e.target.value)}></input>
    <br/>
    <br/>
    <label>password</label>
    <input type="text" name="username" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
    <br/>
    <br/>
    <label>age</label>
    <input type="text" name="username" value={age} onChange={(e)=>setage(e.target.value)}></input>
    <br/>
    <br/>
    <label>city</label>
    <input type="text" name="username" value={city} onChange={(e)=>setcity(e.target.value)}></input>
    <br/>
    <br/>
    <label>is_married</label>
    <input type="text" name="username" value={is_married} onChange={(e)=>setis_married(e.target.value)}></input>
    <br/>
    <br/>
    <button onClick={handleSubmit}>Signup</button>

    
    
    
    
    
    
    
    </div>
  )
}

export default Signup