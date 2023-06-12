import React, { useState ,useEffect} from 'react'
import axios from "axios"
import Edit from './Edit'


const initialState={
    title:"",
    body:"",
    category:""

}

const Notes = () => {
    const [data,setData]=useState([])
    const [inp,setInp]=useState(initialState)



const handelChange=(e)=>{
    const {value,name}=e.target
    setInp({...inp,[name]:value})
}

const handelSubmit=(e)=>{
    e.preventDefault()
    fetch("https://easy-puce-leopard-boot.cyclic.app/notes/create",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Authorization":localStorage.getItem("token")
    },
    body:JSON.stringify(inp)
}).then((res)=>res.json()).then((res)=>console.log(res)).catch((er)=>console.log(er))
setInp(initialState)
}
const {title,body,category}=inp
useEffect(()=>{
fetch("https://easy-puce-leopard-boot.cyclic.app/notes/",{
    headers:{
        "Authorization":localStorage.getItem("token")
    }
}).then((res)=>res.json()).then((res)=>{
    setData(res)
    console.log(res)
}).catch((er)=>{
    console.log(er)
})
},[])



  return (
    <div>
        <h1>Notes</h1>
        {data.map((el)=>{
            return <div key={el._id}>
                <h2>{el.body}</h2>
                <h2>{el.body}</h2>
                <h3>{el.category}</h3>
                <button >Update</button>
                <button>Delete</button>
            </div>
        })}

<h2>Post the Notes</h2>
        <form onSubmit={handelSubmit}>
            <input type="text"  placeholder='title' value={title} name="title" onChange={handelChange}/><br />
            <input type="text" placeholder='body'  value={body} name="body" onChange={handelChange}/><br />
            <input type="text" placeholder='category' value={category} name="category" onChange={handelChange}/><br />
            <input type="Submit" /><br />
        </form>

        <h3>Edit The Notes</h3>
        {/* <form onSubmit={handelSubmit1}>
            <input type="text"  placeholder='title' value={title} name="title" onChange={handelChange}/><br />
            <input type="text" placeholder='body'  value={body} name="body" onChange={handelChange}/><br />
            <input type="text" placeholder='category' value={category} name="category" onChange={handelChange}/><br />
            <input type="Submit" /><br />
        </form> */}

    </div>
  )
}

export default Notes