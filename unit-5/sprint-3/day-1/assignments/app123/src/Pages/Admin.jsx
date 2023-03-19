import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productReducer/action';
const initialState={
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:"",
}

const Admin = () => {
    const [product,setproduct]=useState(initialState);

   const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(product,"product")
        dispatch(addProduct(product))

        setproduct(initialState);
    
    
    
    }
    const handleChange=(e)=>{

        console.log(e.target.value);
        const {name,value}=e.target;
        console.log(name,"name",value,"value")
        setproduct((prev)=>{return {...product,[name]:value}})


    }





  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='image' name="image" value={product.image} onChange={(e)=>{handleChange(e)}}/>
            <input type="text"  placeholder='title' name="title" value={product.title} onChange={(e)=>{handleChange(e)}}/>
            <input type="text" placeholder='brand' name="brand" value={product.brand} onChange={(e)=>{handleChange(e)}}/>

            <input type="text" placeholder='price' name="price" value={product.price} onChange={(e)=>{handleChange(e)}}/>
            <input type="text" placeholder='discount' name="discount" value={product.discount} onChange={(e)=>{handleChange(e)}}/>
            <select  name="gender" onChange={(e)=>{handleChange(e)}}>
                <option value="--">SelectGender</option>
                <option value="men">Men</option>
                <option value="women">WOMEN</option>
                <option value="kids">KIDS</option>
            </select>
            <button type="submit">Submit</button>
        </form>




    </div>
  )
}

export default Admin