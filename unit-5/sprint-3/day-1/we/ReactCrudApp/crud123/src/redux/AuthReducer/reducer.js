import { GETAUTHREQUEST, GETAUTHSUCCESS, GETAUTHFAILURE } from "./actionTypes";
const initialState = {
    isLoading: false,
    token: "",
    isError: false,
    isAuth:false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GETAUTHREQUEST:
            return { ...state, isLoading: true,isAuth:false }
        case GETAUTHSUCCESS:
            return { ...state, isLoading: false, token:payload,isAuth:true }
        case GETAUTHFAILURE:
            return { ...state, isLoading: false, isError:true,isAuth:false}
        default:
            return state;
    }

}