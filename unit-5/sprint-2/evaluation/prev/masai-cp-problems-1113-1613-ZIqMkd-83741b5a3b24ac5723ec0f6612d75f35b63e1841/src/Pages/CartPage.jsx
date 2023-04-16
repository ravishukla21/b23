import { useSelector } from "react-redux";

export const CartPage = () => {   
  const store=useSelector(store=>store.cartReducer)
  console.log(store,"cartpage")
  return <div data-testid="cart-list">{/*   Map through cart store  */}
  cartpage
  
  
  </div>;
};
