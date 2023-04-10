import React, {useState, useReducer } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};
// "NAME"
// "BATCH"
// "COURSE"
// "IMAGE"
// "RATING"
// "STATUS"
// "RESET" - (For resetting the state)

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME": {
      return { ...state, name: payload }
    }
    case "BATCH": {
      return { ...state,  batch: payload }
    }
    case "COURSE": {
      return { ...state, course: payload }
    }
    case "IMAGE": {
      return { ...state, image: payload }
    }
    case "RATING": {
      return { ...state, rating: payload }
    }
    case "STATUS": {
      return { ...state,status: payload }
    }
    case "RESET": {
      return { initialState }
    }
    default: {
      return state;
    }


  }
};

export const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setdata] = useState([]);
  const handlesubmit=(e)=>{
    e.preventDefault();
    setdata({...data,state})
    dispatch({type:"RESET"})
  }
  console.log(data,"data")

  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={handlesubmit}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            {/* Provide Input tag Here */}
            <input type="text" value={state.name} onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} />

          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            {/* Provide Input tag Here */}
            <input type="text" value={state.batch} onChange={(e) => dispatch({ type: "BATCH",payload: e.target.value })} />
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            {/* Provide Input tag Here */}
            <input type="text" value={state.course} onChange={(e) => dispatch({ type: "COURSE", payload: e.target.value })} />
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            {/* Provide Input tag Here */}
            <input type="text" value={state.image} onChange={(e) => dispatch({ type: "IMAGE", payload: e.target.value })} />
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            {/* Provide Select tag Here */}
            <select data-testid="rating-select" 
            value={state.rating}
             onChange={(e)=>dispatch({type:"RATING",payload:e.target.value})}

            > 
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>




            </select>
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              {/* Provide checkbox Here */}
              <input type="checkbox"
              checked={state.status ==="active"}
              
               onChange={(e)=>dispatch({type:"STATUS",payload:e.target.checked ? "active":"inactive"})}
              
              />

              <label>Active</label>
            </div>
          </div>

          {/* Provide Button to submit Here */}
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};
