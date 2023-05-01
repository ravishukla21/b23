import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../api";
import { adddata } from "../api";

const initial = {
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
}

export const AddProduct = () => {
  const [add, setadd] = useState<adddata>(initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setadd((prev) => { return { ...prev, [name]: value } })

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct(add);
    setadd(initial);
  };
  return (
    <div>
      <Navbar page={"Add Product Page"} />
      <form  onSubmit={handleSubmit}>{/* Add all fields here to take product input */}
        <input
          className="product-name"
          placeholder="Enter Name"
          value={add.name}
          name="name"
          onChange={handleChange}
        ></input>
         <input
          className="product-image"
          placeholder="Enter Image"
          name="image"
          value={add.image}
          onChange={handleChange}
        ></input>
        <input
          className="product-brand"
          placeholder="Enter brand"
          name="brand"
          value={add.brand}
          onChange={handleChange}
        ></input>
        <input
          className="product-price"
          placeholder="Enter price"
          name="price"
          type={"number"}
          value={add.price}
          onChange={handleChange}
        ></input>

        <button className="submit-form">Add Product</button>

      </form>
    </div>
  );
};
