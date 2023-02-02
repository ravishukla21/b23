// import module.css here;
import styles from "./product.module.css"
// import { useState } from "react";
const Product = ({ name, price, quantity, id, handleQty }) => {
  // var [quantity12, newquantity] = useState(quantity)
  // var  newquant=0
  // if (quantity12 <= 0) {
    
  //  } else {
  //   var add1 = () => {

  //     newquantity(quantity12 + 1)
  //   }
  //   console.log(quantity12)

  //   var minus1 = () => {
  //     newquantity(quantity12 - 1)
  //   }
  // }
  
  // console.log(styles)
  return (
    <>
      <div data-testid="product-container" className={styles.App}>
        {/* <h1>{quantity12}</h1> */}
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=>handleQty(id,1)}>+</button>
        <h2 data-testid="product-quantity">{quantity}</h2>
        <button data-testid="quantity-decrement" disabled={quantity<=0} onClick={()=>handleQty(id,-1)}>-</button>
       
      </div>
    </>
  );
};
export default Product;
