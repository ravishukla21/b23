import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../redux/productReducer/action";
import ProductCard from './ProductCard';

const ProductList = () => {

    const dispatch = useDispatch();

    const data = useSelector((store) => store.productReducer);
    const { products } = data
    useEffect(() => {
        dispatch(getProducts)
    }, [])


    console.log(data, "data")
    return (<div>
        
            <h1>ProductList</h1>



            <>

            {products.map((el)=>{return <ProductCard key={el.id} {...el}/>})}


                {/* {products.map((el) => {
                    return <ProductCard{...el} />
                })} */}
            </>








        </div>
    )
}

export default ProductList