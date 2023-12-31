import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload };
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isAuth: false, token: "" };
        default:
            return state;
    }
}






