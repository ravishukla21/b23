import  {combineReducers, legacy_createStore} from "redux";
import { counterReducer } from "./counterReducer";



const commonreducer=combineReducers({counter:counterReducer})

export const store =legacy_createStore(commonreducer);

    



