import { AUTHREQUEST, AUTHSUCCESS, AUTHFAILURE } from "./actionTypes";
const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
}
export const reducer = (state=initialState, { type, payload }) => {
    switch (type) {

        case AUTHREQUEST:
            return { ...state, isLoading: true, isError: false }
        case AUTHSUCCESS:
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload }
        case AUTHFAILURE:
            return {...state,isLoading:false,isError:true,token:"",isAuth:false}
        default:
            return state;

    }

}