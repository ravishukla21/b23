 import {useState} from "react"
import "./App.css";
import data from "./db.json";
import Product from "./components/Product"
function App() {
   const[count,setcount]=useState(data)
  //  var [total,settotal]=useState(0)
  
  // console.log(data)
  // let price
  // console.log(price,"hi")
  let total=0
  for(let i=0;i<count.length;i++){
    console.log(count[i])
    total=total+(count[i].price*count[i].quantity)
   
  }
  // settotal(total)
  
  const handleQty=(id,val)=>{
    const up=count.map((el)=>
    el.id===id?{...el,quantity:el.quantity+val}:el
    )
    setcount(up)
  }
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/* hello */}
        {/*  map through the  data and pass props to the Product component */}
        {count.map((el)=>(<Product id={el.id} price={el.price} quantity={el.quantity}  name={el.name} handleQty={handleQty}/>))}

      </div>

      <h1 id="total-cart" data-testid="total-cart">
        Total:{total}



        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
      </h1>
    </div>
  );
}

export default App;
