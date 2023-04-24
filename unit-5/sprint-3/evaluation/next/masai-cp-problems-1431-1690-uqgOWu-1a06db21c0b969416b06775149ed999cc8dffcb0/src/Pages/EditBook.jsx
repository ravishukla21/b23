import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";


import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";

export const EditBook = (data46) => {  
  console.log(data46,"datakdsfakkdasfhkads")
 
  const val=useParams();
  console.log(val,"valueusingparams") 
  const {id}=val;
  const [data,setdata]=useState({});
 
  const product=useSelector(store=>store.bookReducer.books);
  useEffect(()=>{
    const data=product.find((el)=>el.id===+id)
    setdata(data)
  },[])
  console.log(data,"dataineditproduct")
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setdata((prev)=>{
      return {...prev,[name]:value}
    })
  }
  const dispatch=useDispatch();


  const handleEdit=()=>{
    dispatch(editBook(data,id))
    console.log(id,"id")
  }
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID:{id} </h1>
      <input type="text" placeholder="Name" data-testid="book-name" value={data.book_name}  name={"book_name"}
      onChange={handleChange}/>
      <input type="text" placeholder="Author" data-testid="book-author" value={data.author} name={"author"}
      onChange={handleChange}/>
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
        value={data.no_of_chapters}
        name={"no_of_chapter"}
        onChange={handleChange}
        
      />
      <button data-testid="update-book" onClick={handleEdit}>Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
