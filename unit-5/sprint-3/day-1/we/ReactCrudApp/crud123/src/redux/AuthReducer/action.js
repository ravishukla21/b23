import { GETAUTHREQUEST, GETAUTHSUCCESS, GETAUTHFAILURE } from "./actionTypes";
import axios from "axios";

export const getauthrequestaction = () => {
    return { type: GETAUTHREQUEST }
}

export const getauthsuccessaction = (value) => {
    return { type: GETAUTHSUCCESS, payload: value }
}

export const getauthfailureaction = () => {
    return { type: GETAUTHFAILURE }
}



export const handleAddlogin = (email, password) => (dispatch) => {
    const initialState = {
        email, password

    }
    console.log(initialState, "initialstate")
    dispatch(getauthrequestaction())
    return axios.post("https://reqres.in/api/login", initialState).then((res) => {
        console.log(res.data, "resdatat")
        dispatch(getauthsuccessaction(res.data.token))

    }).catch(err => dispatch(getauthfailureaction()))


}

