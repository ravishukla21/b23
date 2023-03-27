import React from "react";
interface formState{
  name:string;
  brand:string;
  price:number;
  image:string;
  like:number;
  dislike:number;
  }

  // 1. Image with class `product-image`
  // 2. Name with class `product-name`
  // 3. Price with class `product-price`
  // 4. Brand with class `product-brand`
  // 5. Like button with `data-testid=like-button`
  // 6. Like count with class `product-like`
  // 7. Dislike button with `data-testid=dislike-button`
  // 8. Dislike count with class `product-dislike`
  // 9. Delete button with `data-testid=delete-button`

export const ProductCard = ({name,brand,price,image,like,dislike}:formState) => {
  // console.log(key,"key")
  console.log(name,brand,like,dislike,price,image,"productcard")
  return (
    <div className={`product-card`}>
      <img className="product-image" src={image}/>
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
      <p className="product-brand">{brand}</p>
      <button data-testid="like-button">Like</button>
      <p className="product-like">{like}</p>
      <button data-testid="dislike-button">DisLike</button>
      <p className="product-dislike">{dislike}</p>
      <button data-testid="delete-button">Delete</button>

     
      {/* Add all elements of product card here */}
    </div>
  );
};
