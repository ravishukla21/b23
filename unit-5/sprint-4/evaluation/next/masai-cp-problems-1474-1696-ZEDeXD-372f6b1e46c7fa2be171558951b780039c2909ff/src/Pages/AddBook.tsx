import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { addBook } from "../api";

const initial = {
  name: "",
  author: "",
  image: "",
  chapter: 0,
  quantity: 0,
}
export const AddBook = () => {
  const [add, setadd] = useState(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const {name,value}=e.target;
   setadd((prev)=>{
    return {...prev,[name]:value}
   })

  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(add);
    setadd(initial);
    

  }
  return (
    <div>
      <Navbar page="Add New Book"/>
      <form onSubmit={handleSubmit}>
        <input className="book-name" placeholder="Book Name" name="name" value={add.name} onChange={handleChange} />
        <input className="book-image" placeholder="Book image" name="image" value={add.image} onChange={handleChange} />
        <input className="book-author" placeholder="Book Author" name="author" value={add.author} onChange={handleChange} />
        <input className="book-chapter" placeholder="0" name="chapter" value={add.chapter} onChange={handleChange} />
        <input className="book-quantity" placeholder="0" name="quantity" value={add.quantity} onChange={handleChange} />

        <button className="submit-form" type="submit" >Add Book</button>



      </form>



    </div>

  )


};


// <input className="book-image" placeholder="Book image" name="image" value={add.image} onChange={handleChange} />
{/* <input className="book-author" placeholder="Book Author" name="author" value={add.author} onChange={handleChange} />
<input className="book-chapter" placeholder="0" name="chapter" value={add.chapter} onChange={handleChange} />
<input className="book-quantity" placeholder="0" name="quantity" value={add.quantity} onChange={handleChange} /> */}