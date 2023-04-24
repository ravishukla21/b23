import { STUDENT_REQUEST_PENDING, STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_SUCCESS } from "./actionTypes";
import axios from "axios"

//http://localhost:8080/students
export const getstudentdata = (obj) => (dispatch) => {
    dispatch({ type: STUDENT_REQUEST_PENDING })
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,obj).then((res) => { (dispatch({ type: STUDENT_REQUEST_SUCCESS, payload: res.data })) }).catch((err) => { dispatch({ type: STUDENT_REQUEST_FAILURE }) })
}