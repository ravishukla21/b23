import React,{useEffect,useState} from "react";
import { obj,getProducts } from "../api";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<obj[]>([]);
  useEffect(()=>{
    getProducts().then((res)=>{
      setProducts(res)
    })
  },[])

  return (
    <div className={`product-list`}
    style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
    >
      {/* Add all product cards here in grid format  */}

      {products &&
        products.map((el) => {
          return <ProductCard key={el.id} setProducts={setProducts} {...el} products={products}/>;
        })}
    </div>
  );
};

export default ProductList;
