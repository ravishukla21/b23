import { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";

const url = "http://localhost:8080/todos";



const Todos = () => {
  const [todos, settodos] = useState("")

  const getData = () => {
    axios.get(url).then((res) => {


      console.log(res.data, "jjjjjjjjjjj")
      settodos(res.data)

    })
      .catch((err) => { console.log(err) })
  }
  useEffect(() => {

    getData();
  }, []);
  console.log(todos, "hiiiiii")
  const handleit = (input) => {
    console.log(input, "inout");
    const task = {
      title: input,
      status: false,
    }

    axios.post(url, task)
      .then((res) => {
        console.log(res);

        settodos(res.data);
        getData();


      })


  }

  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput addTodo={handleit} />


      {todos.map((el) =>
        <div data-testid="todos-wrapper" key={el.id}>
        
          { el.title}-{el.status ? "True" : "False"}
        </div>

      )}

    </div>
  );
};

export default Todos;
