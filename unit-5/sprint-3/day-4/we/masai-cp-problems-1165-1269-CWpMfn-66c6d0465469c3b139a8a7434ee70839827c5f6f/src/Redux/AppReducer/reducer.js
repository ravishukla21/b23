import { COFFEE_DATA, EMPLOYEE_DATA, RESTAURANT_DATA } from "./actionType";

const initialState = {

  coffeeData: [],
  restaurantData: [],
  employeeData: []

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {


    case COFFEE_DATA:
      return { ...state, coffeeData: payload };

    case RESTAURANT_DATA:
      return { ...state, restaurantData: payload };
    case EMPLOYEE_DATA:
      return { ...state, employeeData: payload };






    default:
      return state

  }

};

export { reducer };