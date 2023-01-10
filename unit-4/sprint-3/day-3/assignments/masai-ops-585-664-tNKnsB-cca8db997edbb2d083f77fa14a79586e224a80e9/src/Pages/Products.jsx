import React from 'react'
import {useState,useEffect} from "react"

const getdata=()=>{
  return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").then((res)=>res.json())
};
export default function AllProducts() {
const [data,setData]=useState([])
const [loading,setLoading]=useState(false);
const [err,setErr]=useState(false);


const fetchdataandRender=()=>{
  setLoading(true)
  getdata().then((data)=>setData(data.data)).catch((err)=>setErr(true)).finally(()=>setLoading(false))

}
console.log(data)

useEffect(()=>{
fetchdataandRender();
},[])

if(loading){
  return <h1>Loading....</h1>
}
if(err){
  return <h1>Something Went Wrong</h1>
}

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" >
          {/* Map the below div against product data */}
           {data.map((el)=>{
            return (
              <div>
                <img src={el.image} alt="" />
              <h3 className = "name">{el.title} </h3>
              <div className= "brand">{el.brand}</div>
              <div className = "price">{el.price}</div>
          </div>
            )
           })}
           {/* {data.map((el)=>{
             return (
              <h1>{el.brand}</h1>
             )
           }
           )} */}
      </div>
    </div>
  )
}