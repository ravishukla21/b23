import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { getemployeedata } from "../Redux/AppReducer/action";

export default function EmployeeData() {
	const dispatch=useDispatch();
	const {employeeData}=useSelector((store)=>store)
	console.log(employeeData,"store1employee")

	useEffect(()=>{

		dispatch(getemployeedata)
	},[])
	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{/* Map the below div against yoru employee data */}
				{employeeData?.map((el)=>{
					return <div className="employee" style={{ width: "250px" }} key={el.id}>

					<img className="image" alt="img" width="70%" src={el.image}/>
					
					<div className="name"> {el.name}</div>
					<div className="gender"> {el.gender}</div>
					<div className="department"> {el.department}</div>
				</div>
				})}
				
			</div>
		</div>
	);
}
