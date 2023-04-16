//action creator functions here
import { GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionTypes";
import { ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_ERROR } from "./actionTypes";




export const postTodos = (task) => (dispatch) => {
    dispatch(addtodorequestaction())
    axios.post("http://localhost:8080/todos", task).then((res) => {
        dispatch(addtodosuccessaction(res.data))
        console.log(res.data, "res.data.data")



    })
}


export const sideeffects=()=>{
    dispatch(gettodorequestaction())
    axios.get("http://localhost:8080/todos").then(res=>{
      dispatch(gettodosuccessaction(res.data))
      console.log(res.data,"res.data")
    }).catch(()=>dispatch(gettodoerrorstatus()))
    
  }

export const gettodorequestaction = () => {
    return { type: GET_TODOS_REQUEST }
}
export const gettodosuccessaction = (value) => {
    return { type: GET_TODOS_SUCCESS, payload: value }
}
export const gettodoerrorstatus = () => {
    return { type: GET_TODOS_ERROR }
}

export const addtodorequestaction = () => {
    return { type: ADD_TODOS_REQUEST }
}
export const addtodosuccessaction = (value) => {
    return { type: ADD_TODOS_SUCCESS, payload: value }
}
export const addtodoerrorstatus = () => {
    return { type: ADD_TODOS_ERROR }
}