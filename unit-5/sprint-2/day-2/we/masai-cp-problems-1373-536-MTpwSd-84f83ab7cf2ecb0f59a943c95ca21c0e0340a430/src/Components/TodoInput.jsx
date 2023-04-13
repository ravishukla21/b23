import React, { useState } from 'react'

const TodoInput = ({handleclick}) => {
    // console.log(props,"propshandleclick")
//    {handleclick}=props

    // {
    //     "id": 1,
    //     "title": "React",
    //     "status": true
    //   },
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
    // const handleclick = () => {
    //     console.log(adddata, "onbuttonpresss")
    //     return adddata;

    // }
    console.log(adddata,"adddataa13135515")
    return (
        <div>

            <input data-testid = "todo-input" type="text" name="title" value={title} onChange={handleChange} />
            <button  data-testid ="add-button"  onClick={()=>handleclick(adddata)}>Add Todo</button>

        </div>
    )
}

export default TodoInput