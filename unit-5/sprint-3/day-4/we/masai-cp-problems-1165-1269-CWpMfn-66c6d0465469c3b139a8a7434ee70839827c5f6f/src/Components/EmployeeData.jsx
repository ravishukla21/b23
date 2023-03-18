import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/AppReducer/action";

export default function EmployeeData() {
	const dispatch = useDispatch();
	const state = useSelector((store) => store);
	console.log(state.employeeData, "employee")
	const emp = state.employeeData
	useEffect(() => {
		dispatch(getProducts)
	}, [])

	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{emp.map((el) => {

					return <div className="employee" style={{ width: "250px" }}>
						<img className="image" alt="img" width="70%" src={el.image}/>
						<div className="name"> {el.name}</div>
						<div className="gender">{el.gender} </div>
						<div className="department">{el.department} </div>
					</div>
				})}
				{/* Map the below div against yoru employee data */}

			</div>
		</div>
	);
}
