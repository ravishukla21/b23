import axios, { AxiosResponse } from "axios";
export interface obj{
  name:string;
  brand:string;
  price:number;
  image:string;
  id:number;
  like:number;
  dislike:number;

}

export interface adddata{ 
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  
}

export const addProduct = (obj:adddata) => {
  // Add product functionality here
  axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,
  obj);

};

export const getProducts = async () => {
  // Get products functionality
  const res: AxiosResponse<obj[]> = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
  );
  return res.data;

};

export const updateLike = async(id: number, like: number) => {  
  // Update like functionality
  const data = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
    { like }
  );
  return data;


};

export const updateDisLike = async (id: number, dislike: number) => {
  // Update dislike functionality
  const data = await axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
    { dislike }
  );
  return data;
};

export const deleteProduct = async (id: number) => {
  // Delete functionality
  const data = await axios.delete(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  );
  return data;
};