import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { sideeffects } from "../Redux/action";

// get all the todos from the redux store, and map them inside this component
export const TodoList = () => {
  const dispatch=useDispatch();
  const store = useSelector(store => store)
  console.log(store, "store")
  const { isError, isLoading, todos } = store;
  console.log(isError, isLoading, todos, "todosiserrorisloading")
  console.log(todos.length, "length")
 
  useEffect(()=>{
   dispatch(sideeffects());
 },[])

  return (
    <div data-testid='todo-list-wrapper'>

      {/* map all the "individual/single" todo inside this div. */}
      <div  >

        {isLoading ? "...loading" : todos?.map((el, index) => <div data-testid="single-todo" key={index}> <h1>{el.title}--{el.status ? "True" : "False"}</h1> </div>)}

      </div>










    </div>
  );
};

export default TodoList;
