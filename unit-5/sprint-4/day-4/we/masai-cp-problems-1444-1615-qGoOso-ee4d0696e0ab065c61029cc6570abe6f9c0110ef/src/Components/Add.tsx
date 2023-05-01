import React, { useEffect, useState } from "react";
import Todos from "./Todos";

export interface todoProps {
  title: string;
  description: string;
  status: boolean;
}

const Add = () => {
  const [title, settitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const localtodos = localStorage.getItem("todos");
  const [data, setdata] = useState<todoProps[]>(
    localtodos != null ? JSON.parse(localtodos) : []
  );
  useEffect(() => {}, []);
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj: todoProps = {
      title,
      description,
      status: false,
    };
    const localtodos = localStorage.getItem("todos");
    let arr = localtodos != null ? JSON.parse(localtodos) : [];
    arr.push(obj);
    setdata(arr);
    localStorage.setItem("todos", JSON.stringify(arr));
    settitle("");
    setdescription("");
  };
  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <input
          data-testid="title"
          type="text"
          id="title"
          placeholder="Enter Todos"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          data-testid="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <input type="submit" value="Craete Todo" />
      </form>
      {data &&
        data.map((el, i) => {
          return <Todos key={i} {...el} setdata={setdata}/>;
        })}
    </>
  );
};

export default Add;
