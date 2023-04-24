import { BOOKREQUEST,BOOKSUCCESS,BOOKFAILURE} from "./actionTypes";
const initialState={
    isLoading: false,
    isError: false,
    books: [],
  }

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case BOOKREQUEST:
            return { ...state, isLoading: true, isError: false } 
        case BOOKSUCCESS:
            return {...state,isLoading:false,isError:false,books:payload} 
        case BOOKFAILURE:
            return {...state,isLoading:false,isError:true,books:[]}
        default:
            return state
        }

}