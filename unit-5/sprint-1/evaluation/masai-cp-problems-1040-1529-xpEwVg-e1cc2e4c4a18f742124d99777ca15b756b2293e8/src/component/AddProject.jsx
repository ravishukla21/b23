import React from "react";
import { useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {

  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

// // "NAME"
// "TECH_STACK"
// "ASSIGNED_TO"
// "STATUS"
// "RESET" - (For resseting the state)

const reducer = (state, action) => {

  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload

      }
    case "TECH_STACK":
      return {
        ...state,
        tech_stack: action.payload

      }
    case "ASSIGNED_TO":
      return {
        ...state,
        assigned_to: action.payload

      }
    case "STATUS":
      return {
        ...state,
        status: action.payload

      }
    case "RESET":
      return initialState


    default:
      return state
  }
};


export const AddProject = () => {
  const [data, dispatch] = useReducer(reducer, initialState)

  const [submittedData, setSubmittedData] = useState([])

  console.log(data, "data")
  const handleCheck123 = () => {
    dispatch({ type: "STATUS", payload: "completed" })
  }

  const handleClick = (e) => {
    e.preventDefault();
    const newlist = [...submittedData, { ...data }]
    setSubmittedData(newlist)
    dispatch({ type: "RESET" })



  }

  console.log(submittedData, "subm")


  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleClick}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            {/* Add Input box here */}
            <input type="text" name="name" value={data.name} onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} />
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            {/* `Option`-`Value`- React - react- Node - node- Java -java- Python - python */}
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
            <select name="tech_stack" data-testid="tech-stack-select" onChange={(e) => dispatch({ type: "TECH_STACK", payload: e.target.value })}>
            <option value="">-----</option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">Java</option>
              <option value="python">Python</option>


            </select>
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            {/* `Option`-`Value`
                    - Nrupul - nrupul
                    - Albert - albert
                   - Aman - aman */}
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
            <select name="assigned_to" data-testid="assigned-to-select" onChange={(e) => dispatch({ type: "ASSIGNED_TO", payload: e.target.value })}>
            <option value="">-----</option>
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert</option>
              <option value="aman">Aman</option>



            </select>
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            {/* Provide checkbox  with name attribute `name="status"` */}
            <input type={"checkbox"} onClick={handleCheck123} />

          </div>
          <button  >SUBMIT</button>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}

      {/* {data.name === "" ? <div data-testid="no-project-container" > <h1>No Project Found</h1></div> : submittedData?.map((el) => {
        <ProjectList name={el.name} tech_stack={el.tech_stack} assigned_to={el.assigned_to} currentstatus={el.status} />
        }
      } */}

      {data.name===""? <div data-testid="no-project-container" > <h1>No Project Found</h1></div> :null}





       {submittedData?.map((el) => {
        return  <ProjectList id={submittedData.length} name={el.name} tech_stack={el.tech_stack} assigned_to={el.assigned_to} currentstatus={el.status}


           />
       })}


       {/* {submittedData?.map((el) => {
      // //  
      // //     return <ProjectList name={el.name} tech_stack={el.tech_stack} assigned_to={el.assigned_to} currentstatus={el.status} */}

    </div>

  );
};

export { initialState, reducer };
