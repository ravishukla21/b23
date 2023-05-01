import React from "react";
import { todoProps } from "./Add";
import { todosprops } from "./Todos";
function Todo({ title, description, status, setdata }: todosprops) {
  const changelocal = (value: string) => {
    console.log(value);
    const localData = localStorage.getItem("todos");
    let arr = localData != null ? JSON.parse(localData) : [];
    arr = arr.filter((el: todoProps) => {
      if (el.title == value) {
        el.status = !el.status;
      }
      return el;
    });
    localStorage.setItem("todos", JSON.stringify(arr));
    setdata(arr);
  };
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input
        data-testid="todo-status"
        type="checkbox"
        defaultChecked={status}
        onClick={() => changelocal(title)}
      />
    </div>
  );
}

export default Todo;
