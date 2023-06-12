

import React from 'react'
import { useEffect } from 'react'
import {useState} from "react";

const Posts = () => {
    // useEffect(()=>{

    // },[show])
    const [show,setshow]=useState([])
   

    useEffect(() => {
        fetch("https://weak-tan-piglet-hat.cyclic.app/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

                // to create a note we need token so we took token which we have saved in localstorage
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            .then((data) =>{console.log(data)
            
             setshow(data)
            } )
            .catch((err) => console.log(err))
    },[])
    // console.log(show,"show")
    return (
        <div>
            <h1>To see the Posts</h1>
            {show.map((el)=>{
                return<div>   {el.title}</div>
            })}

        </div>
    )
}



export default Posts