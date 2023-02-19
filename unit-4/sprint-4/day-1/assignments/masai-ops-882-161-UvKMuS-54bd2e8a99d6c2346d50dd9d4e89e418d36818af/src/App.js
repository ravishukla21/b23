import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};



//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch (action.type) {

    case "NAME": {

      state = {
        ...state,
        name: action.payload
      }
      console.log(state, "hiiiiiiiii")



      return state

    }
    case "GENDER": {
      state = {
        ...state,
        gender: action.payload
      }
      console.log(state, "123")


      return state

    }
    case "ROLE": {
      state = {
        ...state,
        role: action.payload
      }
      console.log(state, "123")


      return state

    }
    case "STATUS": {
      state = {
        ...state,
        maritalStatus: action.payload
      }
      console.log(state, "12345")


      return state

    }

  }


};

const handleChange = (e) => {
  console.log(e.target.value)
  return e.target.value
}
const letschange = (e) => {
  console.log(e.target.options[e.target.selectedIndex].text, "rt")


}
const clicked = (e) => {
  console.log("hello")
  console.log(e)
}

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [value, dispatch] = useReducer(reducer, initialState)
  console.log(value, "val")

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, value])



  }
  console.log(submittedData)
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" placeholder="Name" name="name" placeholder="name" onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper" >
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" onChange={(e) => dispatch({ type: "GENDER", payload: e.target.options[e.target.selectedIndex].text })}>
                <option>MALE</option>
                <option>FEMALE</option>
                <option>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" onChange={(e) => dispatch({ type: "ROLE", payload: e.target.options[e.target.selectedIndex].text })}>
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="martialStatus" onClick={() => dispatch({ type: "STATUS", payload: true })} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        {submittedData.map((el) => { return <UserRow key={Date.now()} name={el.name} gender={el.gender} role={el.role} maritalStatus={el.maritalStatus} id={submittedData.length} /> }

        )}

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState }
