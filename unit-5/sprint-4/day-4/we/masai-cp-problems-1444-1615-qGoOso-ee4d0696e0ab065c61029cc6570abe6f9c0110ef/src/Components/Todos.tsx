import React from "react";
import { todoProps } from "./Add";
import Todo from "./Todo";
export interface todosprops extends todoProps {
  setdata: React.Dispatch<React.SetStateAction<todoProps[]>>;
}

function Todos(props: todosprops) {
  return (
    <div>
      <Todo {...props} />
    </div>
  );
}

export default Todos;
