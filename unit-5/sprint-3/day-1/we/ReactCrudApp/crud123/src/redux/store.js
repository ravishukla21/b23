import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { reducer as AuthReducer} from "./AuthReducer/reducer";
import { combineReducers } from "redux";
import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    AuthReducer,ProductReducer
});



export const  store=legacy_createStore(rootReducer,applyMiddleware(thunk));