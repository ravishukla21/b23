import axios, { AxiosResponse } from "axios";
interface todo{
  name:string;
  brand:string;
  price:number;
  image:string;
  like:number;
  dislike:number;

}

export const addProduct = async(name:string,brand:string,price:number,image:string,like:number,dislike:number) => {
 
  // {
    //   name: "",
    //   brand: "",
    //   price: 0,
    //   image: "",
    //   like: 0,
    //   dislike: 0,
    // }

  // Add product functionality here
  console.log(name,"aajabhai")
  const newTodo:todo={
    name,
    brand,
    price,
    image,
    like,
    dislike,
  

  }
  let res: AxiosResponse<todo>=await axios.post(` http://localhost:8080/products`,newTodo)
  

};

export const getProducts =async () => {

  // Get products functionality
  const res=await axios.get("http://localhost:8080/products")
  return res.data

};

export const updateLike = () => {
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = () => {
  // Delete functionality
};
