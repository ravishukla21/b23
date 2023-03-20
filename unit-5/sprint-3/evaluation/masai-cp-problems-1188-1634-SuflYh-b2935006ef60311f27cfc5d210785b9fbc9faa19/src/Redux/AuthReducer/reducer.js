import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";


const initialState = {


    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",


}








export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false, isAuth: false, token: "" };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, isAuth: false, token: "" };
        default:
            return state;

    }


}