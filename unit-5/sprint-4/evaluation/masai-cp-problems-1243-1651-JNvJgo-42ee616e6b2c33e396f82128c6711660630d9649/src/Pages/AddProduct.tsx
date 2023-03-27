import React,{useState}from "react";
import { addProduct } from "../api";
import { Navbar } from "../Components/Navbar";

export const AddProduct = () => {
  // const [name,setname]= useState<string>("")
  // const [brand,setbrand] =useState<string>("")
  // const [price,setprice]=useState<number>(0)
  // const [image,setimage]=useState<string>("")
  // const [like,setlike]=useState<number>(0)
  // const [dislike,setdislike]=useState<number>(0)
   interface formState{
  name:string;
  brand:string;
  price:number;
  image:string;
  like:number;
  dislike:number;
  }
  const [formState,setformState]=useState({
      name: "",
      brand: "",
      price: 0,
      image: "",
      like: 0,
      dislike: 0,

  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target)
     const {name,value,type}=e.target;
     const val=type==="number"?Number(value):value

     setformState({...formState,[name]:val})
    //  console.log(name,brand,price,image)
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    // {
    //   name: "",
    //   brand: "",
    //   price: 0,
    //   image: "",
    //   like: 0,
    //   dislike: 0,
    // }
    
    console.log(formState,"check");
    const {name,brand,price,image,like,dislike}=formState;
    addProduct(name, brand,price,image,like,dislike)
    setformState(formState)
    
    console.log(name,brand,price,image,like,dislike,"destructure")

  }
 
  return (
    <div>
      <Navbar />
      {/* addproduct */}
      <form  onSubmit={handleSubmit} >{/* Add all fields here to take product input */}
        <input type="text" className="product-name" placeholder="Product Name" name="name" value={formState.name} onChange={handleChange}/>
        <br />
        <input type="text" className="product-image" placeholder="Product Image" name="image" value={formState.image}  onChange={handleChange}/>
        <br />
        <input type="text" className="product-brand" placeholder="Product Brand" name="brand" value={formState.brand}  onChange={handleChange}/>
        <br />
        <input type="number" className="product-price" placeholder="0" name="price" value={formState.price} onChange={handleChange}/>
        <br />
        <button type="submit" className="submit-form">Add Product

        </button>


      </form>
    </div>
  );
};
