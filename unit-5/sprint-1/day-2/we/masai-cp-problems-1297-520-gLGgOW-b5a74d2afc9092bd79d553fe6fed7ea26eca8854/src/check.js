import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch(action.type){
  case "USEREMAIL":{
    return {
      ...state,
     
      email:action.payload
     
    }
  }
  case "USERPASSWORD":{
    return {
      ...state,
    
      password:action.payload
    }
  }
  case "SUBMIT":{
    return initialState
  }
  default:
    return state
  
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [data,dispatch]=useReducer(reducer,initialState)
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState("");
  const [show,setshow]=useState(true)
  const handlesubmit=(e)=>{
    e.preventDefault();
    setSubmittedData(data)
    if(data.email.length>0 && data.password.length>0){
      setshow(false)
    }else{
      setshow(true)
    }
    dispatch({type:"SUBMIT"})

  }
  console.log(data,"dataaa")

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={handlesubmit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" value={data.email} onChange={(e)=>dispatch({type:"USEREMAIL",payload:e.target.value})}/>
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" value={data.password}  onChange={(e)=>dispatch({type:"USERPASSWORD",payload:e.target.value})}/>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {show? <div>
        <div data-testid="submitted-data-email">User Email:{submittedData.email}</div>
        <div data-testid="submitted-data-password">User Password:{submittedData.password}</div>
      </div>: <div data-testid="no-details-container">{show && "no details found" }</div>}
     

     
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
