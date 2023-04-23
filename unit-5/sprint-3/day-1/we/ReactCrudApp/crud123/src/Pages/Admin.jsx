import React, { useState } from 'react'

import styled from "styled-components";
import { useDispatch,useSelector } from 'react-redux';
import { postdataproductaction } from '../redux/ProductReducer/action';

const Admin = () => {

  const initialState = {
    image: '',
    title: "",
    price: "",
    
    discount: "",
    gender: "",
    category: ""
  }
  const [product, setproduct] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setproduct((prev) => { return { ...product, [name]: value } })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product,"product")
    dispatch(postdataproductaction(product))
    
  }

  return (
    <DIV>Admin

      <h2>Addproduct</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='image' name="image" value={product.image} onChange={(e) => handleChange(e)} />
        <input type="text" placeholder='title' name="title" value={product.title} onChange={(e) => handleChange(e)} />
        <input type="number" placeholder='price' name="price" value={product.price} onChange={(e) => handleChange(e)} />
        
        <input type="number" placeholder='discount' name="discount" value={product.discount} onChange={(e) => handleChange(e)} />
        <br />
        <select className='category' name="category" value={product.category} onChange={(e) => handleChange(e)} >
          <option value="">select--category</option>
          <option value="topwear">topwear</option>
          <option value="bottomwear">bottomwear</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select>
        <br />
        <select className='gender' name="gender" value={product.gender} onChange={(e) => handleChange(e)}>
          <option value="">select--gender</option>
          <option value="men">men</option>
          <option value="women">women</option>
          <option value="kids">kids</option>

        </select>
        <button>Submit</button>
      </form>
    </DIV>
  )
}

export default Admin

const DIV = styled.div`
border:1px solid red;
font-size:large;
width:600px;
margin:auto auto;
padding:20px;
form{
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:center;
}

`;
