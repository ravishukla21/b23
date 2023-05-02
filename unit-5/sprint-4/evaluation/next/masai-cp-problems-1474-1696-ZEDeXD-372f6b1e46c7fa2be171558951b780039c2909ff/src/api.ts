import axios, { AxiosResponse } from "axios";

export interface obj {
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id: number;
}

interface adddata{
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;

}

export const addBook = (obj: adddata) => {

  axios.post(` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,obj);
 };

export const getBooks = async () => {
  const res: AxiosResponse<obj[]> = await axios.get(`
  http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books
  `);
  return res.data;
};

 export const updateQuantity = async (id:number,quantity:number) => {
  const data=await axios.patch(
    ` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,{quantity}
  )
  return data;

 };  

 export const deleteBook = async(id:number) => {
 const data=await axios.delete(` http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`);
  

 return data;


 };  
