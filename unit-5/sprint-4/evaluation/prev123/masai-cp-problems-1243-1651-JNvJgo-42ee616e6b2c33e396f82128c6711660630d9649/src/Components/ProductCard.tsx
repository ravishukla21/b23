import React from "react";
import { obj, deleteProduct, updateLike, updateDisLike } from "../api";
interface cart extends obj {
  setProducts: React.Dispatch<React.SetStateAction<obj[]>>;
  products: obj[];
}

export const ProductCard = ({
  setProducts,
  name,
  brand,
  price,
  image,
  like,
  dislike,
  id,
  products,
}: cart) => {
  const handleLike = (id: number, like: number) => {
    updateLike(id, like + 1).then((res) => {
      const arr = products.filter((el) => {
        if (el.id == id) {
          el.like = like + 1
        }
        return el;
      })
      setProducts(arr)
    })
  }
  const handleDislike = (id: number, dislike: number) => {
    updateDisLike(id, dislike + 1).then((res) => {

      const arr = products.filter((el) => {
        if (el.id == id) {
          el.dislike = dislike + 1
        }
        return el;
      })
      setProducts(arr)

    })


  }
  const handleDelete = (id: number) => {
    deleteProduct(id).then((res) => {
      const arr = products.filter((el) => {
        if (el.id != id) {
          return el;
        }
      });
      setProducts(arr);
    });
  };
  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}
      <img src={image} width="100%"></img>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
      <div className="product-brand">{brand}</div>
      <button data-testid="like-button" onClick={() => handleLike(id, like)}>
        Like
      </button>
      <span className="product-like">{like}</span>
      <button
        data-testid="dislike-button"
        onClick={() => handleDislike(id, dislike)}
      >
        Dislike
      </button>
      <span className="product-dislike">{dislike}</span>
      <br></br>
      <button data-testid="delete-button" onClick={() => handleDelete(id)} >
        Delete
      </button>
    </div>
  );
};
