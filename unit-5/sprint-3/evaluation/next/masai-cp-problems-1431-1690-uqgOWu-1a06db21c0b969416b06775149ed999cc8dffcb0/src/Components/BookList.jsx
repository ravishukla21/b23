import React, { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const BookList = () => {
  const dispatch=useDispatch();

  const store=useSelector(store=>store.bookReducer);
  const [searchparams]=useSearchParams();
  const location=useLocation();
  console.log(store,"insidebooklist")
  const {isLoading,isError,books}=store;
  let obj={
    params:{
      category:searchparams.getAll("category"),
      _sort:searchparams.get("sort")&&"release_year",
      _order:searchparams.get("sort")
    }
  }
  useEffect(()=>{
     dispatch(getBooks(obj));
  },[location.search])
  return (
    <div data-testid="book-list" style={{display:"grid",gridTemplateColumns:"auto auto auto auto"}}>
      {/* Map through books using BookCard component */}
      {books?.map((el,index)=> <div key={index}>  <BookCard {...el}/>  </div> )}

    </div>
  );
};
