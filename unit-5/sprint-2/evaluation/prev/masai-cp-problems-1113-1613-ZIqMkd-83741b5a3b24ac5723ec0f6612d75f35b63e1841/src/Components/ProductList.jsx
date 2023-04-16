import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const dispatch = useDispatch()
  const store = useSelector(store => store.productReducer)
  console.log(store, "productreducerstore")
  const { isLoading, isError, products } = store
  console.log(isLoading, isError, products)


  useEffect(() => {

    dispatch(getProducts())

  }, [])

  return (
    <div>
      <div>
        {isLoading && <h1>...Loading</h1>}
        {isError && <h1>404 error ..</h1>}
      </div>
       <div data-testid="product-list" style={{ display: "grid", gridTemplateColumns: "auto auto auto", margin: "auto", gap: "20px", border: "1px solid red" }}>
        {/* Map through products with ProductCard component  */}

        {products?.map((el, index) => {
          return <div key={index} style={{ border: "1px solid red" }}>
            <ProductCard {...el} />


          </div>
        })}

      </div> 




    </div>



  );
};
