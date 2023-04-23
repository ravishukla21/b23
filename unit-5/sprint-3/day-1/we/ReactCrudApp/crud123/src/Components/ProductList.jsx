import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdataproductaction, getproductfailureaction, getproductrequestaction, getproductsuccessaction } from '../redux/ProductReducer/action';
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';


const ProductList = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store.ProductReducer)
  console.log(store, "productreducer");
  const { products } = store;

  console.log(products, "prod")

  const location = useLocation();
  console.log(location, "location")
  const [searchparams] = useSearchParams();
  console.log(searchparams.getAll("category1"))
  let obj = {
    params: {
      gender: searchparams.getAll("category"),
      category:searchparams.getAll("category1"),
      _sort:searchparams.get("order") && "price",
      _order:searchparams.get("order")
    }
  }
  useEffect(() => {
    dispatch(getdataproductaction(obj))

  }, [location.search])
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", width: "100%" }}>
      {products.map((el, index) => { return <div key={index}><ProductCard {...el} /></div> })}

    </div>
  )
}

export default ProductList   