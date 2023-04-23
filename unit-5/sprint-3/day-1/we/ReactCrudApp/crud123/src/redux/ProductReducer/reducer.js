import { GETPRODUCTREQUESTACTION, GETPRODUCTSUCCESSACTION, GETPRODUCTFAILUREACTION, POSTPRODUCTREQUESTACTION, POSTPRODUCTSUCCESSACTION, POSTPRODUCTFAILUREACTION } from "./actionTypes";


const initialState = {
    isLoading: false,
    isError: false,
    products: []
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GETPRODUCTREQUESTACTION:
            return { ...state, isLoading: true ,isError:false}
        case GETPRODUCTSUCCESSACTION:
            return { ...state, isLoading: false, products: payload }
        case GETPRODUCTFAILUREACTION:

            return { ...state, isLoading: false, isError: true ,products:[]}
        case POSTPRODUCTREQUESTACTION:
            return { ...state, isLoading: true,isError:false };
        case POSTPRODUCTSUCCESSACTION:
            return { ...state, isLoading: false, products: [...state.products, payload] };
        case POSTPRODUCTFAILUREACTION:
            return { ...state, isLoading: false, isError: true };


        default:
            return state

    }

}