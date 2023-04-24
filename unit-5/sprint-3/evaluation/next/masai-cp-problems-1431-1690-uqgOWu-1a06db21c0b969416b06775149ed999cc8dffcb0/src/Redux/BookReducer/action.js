import { BOOKREQUEST,BOOKSUCCESS,BOOKFAILURE } from "./actionTypes";
import axios from "axios";

//http://localhost:8080/books

export const getBooks = (obj)=>(dispatch) => {   
  // Write logic here
  dispatch({type:BOOKREQUEST})
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,obj).then((res)=>{console.log(res.data,"datainactionofbook")
   dispatch({type:BOOKSUCCESS,payload:res.data})
}).catch((err)=>dispatch({type:BOOKFAILURE}))
};

export const editBook = () => {
  // Write logic here
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
