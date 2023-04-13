import React, { useState } from 'react'

const TodoInput = () => {

    // {
    //     "id": 1,
    //     "title": "React",
    //     "status": true
    //   },
    let object12 = {
        title: "",
        status: false
    }

    let [data, setdata] = useState(object12)
    const {title,status}=data;


    const handleChange = (e) => {
       
       const {name,value}=e.target;

        setdata({...data,[name]:value})

    }
    const handleclick = () => {
        console.log(data, "onbuttonpresss")
    }
    return (
        <div>

            <input data-testid = "todo-input" type="text" name="title" value={title} onChange={handleChange} />
            <button  data-testid ="add-button"  onClick={handleclick}>Add Todo</button>

        </div>
    )
}

export default TodoInput