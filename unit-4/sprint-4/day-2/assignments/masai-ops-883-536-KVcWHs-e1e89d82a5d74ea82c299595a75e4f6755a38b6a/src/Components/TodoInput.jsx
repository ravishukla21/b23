import {useState} from "react"
// import axios from "axios";

// const init={
//     title: "",
//     status:false
//   }

const TodoInput = ({handeldd}) => {
const [data,setData]=useState({
  title: "",
  status:false
})
// const [text,settext]=useState("")
const {title}=data
  const handelChange=(e)=>{
    const {value,name}=e.target
    setData({...data,[name]:value})
   
  }

  const handelsubmit=()=>{
    handeldd(data)
  }
  return (
    <div>
        {/* <h1>{data.title}</h1> */}
        <input type="text" data-testid = "todo-input" value={title} name="title" onChange={handelChange}/>
        <button data-testid ="add-button" onClick={handelsubmit}>Add Todo</button>
    </div>
  )
}

export default TodoInput