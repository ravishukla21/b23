import { BOOKREQUEST,BOOKSUCCESS,BOOKFAILURE, PATCHBOOKINFO} from "./actionTypes";
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
        case PATCHBOOKINFO:
            return {...state,isLoading:false,isError:false}
        default:
            return state
        }

}