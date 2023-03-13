import axios from "axios";
import React,{useEffect}from "react";
import {useDispatch,useSelector} from "react-redux";
import { todoFailureAction, todoRequestAction, todoSuccessAction } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

const url=" http://localhost:8080/products"


export const ProductList = () => {

  const dispatch=useDispatch();
  const todos=useSelector((store)=>{
    
    
    console.log(store.productReducer,"store")
     return store.productReducer.products;
  })
  const isLoading =useSelector((store)=>{
    return store.productReducer.isLoading;
  })
   const getData=()=>{
     dispatch(todoRequestAction());
    axios.get(url)
    .then((res)=>{
      dispatch(todoSuccessAction(res.data));
      console.log(res.data)
    }).catch((err)=>{
      dispatch(todoFailureAction());
      console.log(err)
    })
   }

   useEffect(()=>{
    getData() 
  
  },[])
  
  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {isLoading && <h1>..Loading</h1>}

      {todos.length>0 && todos.map((el)=>{
        return  (

          <div>
            <ProductCard  {...el}/>
          </div>
        )
      })} 
    </div>
  );
};
