import axios from "axios"
import { COFFEE_DATA, EMPLOYEE_DATA, RESTAURANT_DATA } from "./actionType";
let url=[
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee",
 "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",
"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
]
const request=url.map((url1)=> axios.get(url1))

export const getProducts=(dispatch)=>{
    let arr12=[]

    axios.all (request)
    .then((res)=>{res.forEach((resp)=>{
       
        console.log(resp.data)
        arr12.push(resp.data.data)
        // console.log(arr12[0],"arr12")
        dispatch({type:COFFEE_DATA,payload:arr12[0]})
       
        dispatch({type:EMPLOYEE_DATA,payload:arr12[1]})
        dispatch({type:RESTAURANT_DATA,payload:arr12[2]})
       

    })})


    console.log(arr12,123465)

   


   
  
}