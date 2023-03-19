import { GETCOFFEEDATA,GETEMPLOYEEDATA,GETRESTAURANTDATA } from "./actionType";
import axios from "axios";
const urlcoffee="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";
const urlemp="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
const urlrest="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants";

// - Coffee Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee```
//   - Employee Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees```
//   - Restaurant Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants```

const getCoffeeAction = (payload) =>{
    return {type:GETCOFFEEDATA,payload}
}

 const getEmployeeAction = (payload) =>{
    return {type:GETEMPLOYEEDATA,payload}
}

const getRestaurantsAction = (payload) =>{
    return {type:GETRESTAURANTDATA,payload}
}


export const getcoffeedata=(dispatch)=>{
    axios.get(urlcoffee).then((res)=>{
        console.log(res.data,"coffee")
    dispatch(getCoffeeAction(res.data.data))
   
     }
    
    )




}
export const getemployeedata=(dispatch)=>{
    axios.get(urlemp).then((res)=>{
        console.log(res.data,"emp")
    dispatch(getEmployeeAction(res.data.data))
   
     }
    
    )

}


export const getrestaurantdata=(dispatch)=>{
    axios.get(urlrest).then((res)=>{
        console.log(res.data,"resst")
    dispatch(getRestaurantsAction(res.data.data))
   
     }
    
    )


}