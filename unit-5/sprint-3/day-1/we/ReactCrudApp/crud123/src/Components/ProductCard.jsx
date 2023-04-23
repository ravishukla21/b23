import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ id, title, price, description, category, gender, image, rating }) => {

  return (
    <div style={{border:"2px solid green",padding:"0px 15px",height:"100%",margin:"20px",gap:"20px"}}>
    <div style={{height:"auto",width:"auto"}}>
    <div >
    <img width={"80%"} src={image} />
    </div>
    
    <p>{id}</p>
    <p>{title}</p>
    
    <p>{category}</p>
    <p>{gender}</p>
    <p>{price}</p>
    <button>
    <Link to={`/products/${id}`}>EDIT</Link>
    </button>
    </div>
     



    </div>
  )
}

export default ProductCard


