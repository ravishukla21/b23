import { legacy_createStore } from "redux";
import { combineReducers,applyMiddleware } from "redux";

import { reducer  as productReducer} from "./productReducer/reducer";
import { reducer as authreducer } from "./authReducer/reducer";
import thunk from "redux-thunk"
const rootReducer=combineReducers({
    productReducer,
    authreducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))



