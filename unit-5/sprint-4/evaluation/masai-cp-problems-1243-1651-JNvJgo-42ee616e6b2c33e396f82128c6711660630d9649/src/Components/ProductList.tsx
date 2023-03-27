import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      console.log(res, "res")
      setProducts(res)
    })
  }, [])
  console.log(products,"products")

  return (
    <div className={`product-list`}>
      {/* productlist */}
      {/* /* Add all product cards here in grid format  */}
      {products?.map((el) => {
        const {name,brand,price,image,like,dislike}=el;
        console.log(el,"elcheck")

      return  <ProductCard  name={name} brand={brand} price={price} image={image}  like={like} dislike={dislike}/>;

      })} 

    </div>
  );
};

export default ProductList;
