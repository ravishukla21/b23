import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getrestaurantdata } from "../Redux/AppReducer/action";

export default function RestaurantData() {
	const dispatch=useDispatch();
	const {restaurantData}=useSelector((store)=>store)
	console.log(restaurantData,"store1returant")
	useEffect(()=>{
		dispatch(getrestaurantdata);
	},[])
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				{restaurantData?.map((el)=>{
					return 	<div className="restaurant_item">
					<img className="image" alt="img" width="70%" src={el.image} />
					<div className="name"> {el.name}</div>
					<div className="type"> {el.type}</div>
					<div className="rating">{el.rating} </div>
					<div className="number_of_votes"> {el.number_of_votes}</div>
				</div>
				
				
				})}
			
			</div>
		</div>
	);
}
