//Complete the reducer function logic inside the curly braces {}
import { ADD,REDUCE } from "./actionTypes";
const reducer = (state, { type, payload }) => {  
    switch (type) {
        case ADD:
            console.log("reduceradaddada",payload,state)
            return { ...state, counter: state.counter + payload };
        case REDUCE:
            return { ...state, counter: state.counter - payload };
        default:
            return state;
    }

};

export { reducer };  
