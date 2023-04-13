import React, { useState } from 'react'

const TodoInput = ({handleclick123}) => {
   

    let object12 = {
        title: "",
        status: false
    }

    let [adddata, setadddata] = useState(object12)
    const {title,status}=adddata;


    const handleChange = (e) => {
       
       const {name,value}=e.target;

       setadddata({...adddata,[name]:value})

    }
  
    console.log(adddata,"adddataa13135515")
    return (
        <div>

            <input data-testid="todo-input" type="text" name="title" value={title} onChange={handleChange} />
            <button  data-testid="add-button"  onClick={()=>handleclick123(adddata)}>Add Todo</button>

        </div>
    )
}

export default TodoInput