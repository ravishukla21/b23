import { STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS, STUDENT_REQUEST_FAILURE } from "./actionTypes";

const initialState = {

    isLoading: false,
    isError: false,
    students: [],

}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case STUDENT_REQUEST_PENDING:
            return { ...state, isLoading: true, isError: false, students: [] };
        case STUDENT_REQUEST_SUCCESS:
            return { ...state, isLoading: false, isError: false, students: payload };
        case STUDENT_REQUEST_FAILURE:
            return { ...state, isLoading: false, isError: true, students: [] };
        default:
            return state
    }

}