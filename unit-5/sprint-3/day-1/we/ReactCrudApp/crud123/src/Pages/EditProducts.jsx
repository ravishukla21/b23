import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editproducts } from '../redux/ProductReducer/action';

const EditProducts = () => {

  const [data, setdata] = useState({ image:"", title:"", id:"", price:"", category:"", gender:""});
  const product = useSelector((store) => store.ProductReducer.products)
  console.log(product, "product")
  const dispatch = useDispatch()
  const val = useParams();
  console.log(val.id)
  const { id } = val;
  useEffect(() => {


    const data12 = product.find((el => el.id === +id))
    console.log(data12, "data");
    if(data12){
      setdata(data12)
    }else{
      setdata({ image:"", title:"", id:"", price:"", category:"", gender:""})
    }
   
    console.log(id, "id");
  }, [])

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editproducts(data, id)).then(() => {
      console.log("editedsucessfully")
    })

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value }
    })

  }
  console.log(data, "data")
  return (
    <div>
      <h3>editproducts:{val.id}</h3>

      <form onSubmit={handleEdit}>
        <input type="text" name="image" placeholder="image" onChange={handleChange} value={data.image}></input>
        <br />
        <input type="text" name="title" placeholder='title' onChange={handleChange} value={data.title }></input>
        <br />
        <input type="number" name="price" placeholder='price' onChange={handleChange} value={data.price } />
        <br />
        <input type="text" name="category" placeholder='category' onChange={handleChange} value={data.category } />
        <br />
        <select name='gender' onChange={handleChange} value={data.gender} >
          <option value="">selectgender</option>
          <option value="mens">mens</option>
          <option value="womens">womens</option>
          <option value="kids">kids</option>
        </select>
        <br />
        <button type="submit">EDIT</button>


      </form>
    </div>
  )
}

export default EditProducts;