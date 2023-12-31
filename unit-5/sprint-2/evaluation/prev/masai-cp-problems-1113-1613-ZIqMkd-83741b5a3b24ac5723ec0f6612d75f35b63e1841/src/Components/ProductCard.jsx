import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({ title, discountPercentage, brand
  , price, thumbnail, id

}) => {
  const dispatch = useDispatch();
 const store= useSelector((store)=>store.cartReducer)
 console.log(store.cart,"cartreducer")

  const handleclick = (id) => {
    console.log(id, "id")
    dispatch(addToCart(id))
  }
  return (
    <div className="product-card">
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
      <div>
        <img className="product-image" style={{ width: "100%" }} src={thumbnail} ></img>
        <p className="product-title">{title}</p>
        <p className="product-brand">{brand}</p>
        <p className="product-price">{price}</p>
        <p className="product-discount">{discountPercentage}</p>
        <button className="add-to-cart" onClick={() => handleclick(id)} >Add to Cart</button>




      </div>
    </div>
  );
};
