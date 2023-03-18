
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";



export default function CoffeeData() {
  const dispatch=useDispatch();
	const state=useSelector((store)=>store);
	console.log(state.coffeeData,"COFEEoyee")
  const coffe=state.coffeeData
	useEffect(()=>{
		dispatch(getProducts)
	  },[])
    console.log(coffe,"ravi")

 
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont" >
      {coffe.map((el) => {
        {/* map the below div against your coffee data */}
       return  <div className = "coffee-item" >
          <img className = "image" alt = "img" width = "70%" src={el.image} />
          <div className = "title"> {el.title}</div>
          <div className = "price">{el.price} </div>
        </div>

      })}
    </div>
   </div>
   
  )
}