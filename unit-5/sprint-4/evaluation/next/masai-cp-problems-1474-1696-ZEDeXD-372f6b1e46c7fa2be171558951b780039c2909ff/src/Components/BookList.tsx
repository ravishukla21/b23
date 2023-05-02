import React,{useEffect,useState} from "react";
import { getBooks, obj } from "../api";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const [books,setBooks]=useState<obj[]>([]);
  useEffect(()=>{

    getBooks().then((res)=>{
      setBooks(res)
    })
  },[])
  console.log(books,"bookschecking")
  return(  <div data-testid="book-list"
  style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}
  >
   {books.length>0 && books.map((el)=>{
    return <BookCard key={el.id} {...el} books={books} setBooks={setBooks}/>
   })}



</div>

  )
 
};
