import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";


export default function RestaurantData() {
	const dispatch = useDispatch();
	const state = useSelector((store) => store);
	console.log(state.restaurantData, "ReSTURANT")
	const rest = state.restaurantData
	useEffect(() => {
		dispatch(getProducts)
	}, [])
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{rest.map((el) => {
					return <div className="restaurant_item">
						<img className="image" alt="img" width="70%" src={el.image} />
						<div className="name">{el.name} </div>
						<div className="type">{el.type} </div>
						<div className="rating">{el.rating} </div>
						<div className="number_of_votes"> {el.number_of_votes}</div>
					</div>
				})}

				{/* Map the below div against your restaurant Data */}
				{/* <div className="restaurant_item">
					<img className="image" alt="img" width="70%" />
					<div className="name"> </div>
					<div className="type"> </div>
					<div className="rating"> </div>
					<div className="number_of_votes"> </div>
				</div> */}
			</div>
		</div>
	);
}
