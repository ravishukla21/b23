import { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";


const Todos = () => {
  const [data, setdata] = useState([])
  const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data, "resdata")
      setdata(res.data)

    })
  }, [])
  console.log(data, "dataindata")

  const handleclick = (adddata) => {
    console.log(adddata, "adddata")
    axios.post(url, adddata).then(res => {
      console.log("res.data", res.data)
      return setdata([...data, res.data])

    })
  }










  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput handleclick123={handleclick} />
      {/* map through the todos array and display the tasks */}
      {data?.map((el, index) => { return <div data-testid="todos-wrapper" key={index}>{el.title}-{el.status ? "True" : "False"}   </div> })}
    </div>
  );
};

export default Todos;
