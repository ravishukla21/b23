import React, { useEffect } from 'react';
import { useSelector,useDispatch, ReactReduxContext } from 'react-redux';
import { getcoffeedata } from '../Redux/AppReducer/action';


export default function CoffeeData() {

  const dispatch= useDispatch();
  const {coffeeData}=useSelector((store)=>store);
  useEffect(()=>{
    dispatch(getcoffeedata)
  },[])
 
	console.log(coffeeData,"store1coffee")
 
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont" >
        {coffeeData?.map((el)=>{
          return  <div className = "coffee-item" key={el.id} >
          <img className = "image" alt = "img" width = "70%" src={el.image}/>
          <div className = "title">{el.title} </div>
          <div className = "price">{el.price} </div>
        </div>
        })}
        {/* map the below div against your coffee data */}
        {/* <div className = "coffee-item" >
          <img className = "image" alt = "img" width = "70%" />
          <div className = "title"> </div>
          <div className = "price"> </div>
        </div> */}
    </div>
   </div>
   
  )
}