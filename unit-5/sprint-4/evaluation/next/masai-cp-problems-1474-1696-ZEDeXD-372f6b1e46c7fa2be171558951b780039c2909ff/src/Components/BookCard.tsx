import React from "react";
import { deleteBook, obj, updateQuantity } from "../api";
interface cart extends obj {
  books: obj[];
  setBooks: React.Dispatch<React.SetStateAction<obj[]>>;
}

export const BookCard = ({
  books, setBooks, id, name, author, image, chapter, quantity

}: cart) => {

  const handleDelete = (id: number) => {
    deleteBook(id).then((res) => {

      const arr = books.filter((el) => {
        if (el.id != id) {
          return el
        }
      })
      setBooks(arr);
    }
    )
  }
  const handleQuantity=(quantity:number,no:number,id:number)=>{
    const newquantity=quantity+no;


    console.log(newquantity,"quantity")
    updateQuantity(id,newquantity).then((res)=>{
      const arr=books.filter((el)=>{
      if(el.id==id){
        el.quantity=quantity+no;
      }
      return el;
      
      })
      setBooks(arr);
    })

  }
  return <div className="book-card">bookcard
    <img className="book-image" src={image} />
    <p className="book-name">{name}</p>
    <p className="book-author">{author}</p>
    <p className="book-chapter">{chapter}</p>
    <div>
      <button data-testid="increase-quantity" 
      onClick={()=>handleQuantity(quantity,1,id)}
      disabled={quantity>9}
      >Quantity++</button>
        <p className="book-quantity">{quantity}</p>

      <button data-testid="decrease-quantity"
       onClick={()=>handleQuantity(quantity,-1,id)}
       disabled={quantity<=0}
      >Quantity--</button>
    </div>
  
    <button data-testid="delete-button" onClick={() => handleDelete(id)}>Delete</button>

  </div>;
};
