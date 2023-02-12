import React from 'react'
import { useState, useEffect } from "react"

const getData = () => {
  return fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").then((res) => res.json())
}

export default function AllProducts() {
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)
  const [arr, setarr] = useState([])

  const fetchData = async () => {
    setloading(true)
    try {
      const data = await getData()
      setarr(data.data)
      setloading(false)
    } catch (err) {
      seterror(true)
      setloading(false)

    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <h1>loading...</h1>

  } else if (error) {
    return <h1>Something went wrong</h1>
  } else {
    return (
      <div>
        <h2>All Products</h2>
        <div className="products-wrapper">
          {/* Map the below div against product data */}
          {arr.map((el) => {
            return <div>
              <h3 className="name"> {el.name}</h3>
              <div className="brand">{el.brand}</div>
              <div className="price">{el.price}</div>
            </div>
          })}

        </div>
      </div>
    )

  }


}