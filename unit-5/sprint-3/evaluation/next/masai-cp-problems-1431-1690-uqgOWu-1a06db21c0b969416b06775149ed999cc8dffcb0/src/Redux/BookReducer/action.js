import { BOOKREQUEST,BOOKSUCCESS,BOOKFAILURE, PATCHBOOKINFO } from "./actionTypes";
import axios from "axios";

//http://localhost:8080/books

export const getBooks = (obj)=>(dispatch) => {   
  // Write logic here
  dispatch({type:BOOKREQUEST})
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,obj).then((res)=>{console.log(res.data,"datainactionofbook")
   dispatch({type:BOOKSUCCESS,payload:res.data})
}).catch((err)=>dispatch({type:BOOKFAILURE}))
};

export const editBook = (dataobj,id)=>(dispatch) => {  
  // Write logic here
  dispatch({type:BOOKREQUEST})
  axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,dataobj).then(()=>{
    dispatch({type:PATCHBOOKINFO})
  }).catch((err)=>{
    dispatch({type:BOOKFAILURE})
  })
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
