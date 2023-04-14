import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";



const rootreducer=combineReducers({
    counterReducer,themeReducer

})
 export const store=legacy_createStore(rootreducer)