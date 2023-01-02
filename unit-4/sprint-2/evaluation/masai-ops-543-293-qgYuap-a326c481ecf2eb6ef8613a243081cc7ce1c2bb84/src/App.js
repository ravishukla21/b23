import "./App.css";
// import { useState, useEffect } from "react";
import Restaurants from "./Component/Restaurants";


// const getData = (url) => {
//   return fetch(url)
//     .then((res) => res.json())
// }

export default function App() {
  // const [loading, setLoading] = useState(false);
  // const[formState,setFormState]=useState(initState);
  // const [error, setError] = useState(false);
  // const [products, setProducts] = useState([]);

  // const fetchandupdate = async () => {
  //   setLoading(true);
  //   try {
  //     let data = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
  //     setProducts(data.data);



  //     setLoading(false);
  //   } catch (err) {
  //     setError(true);
  //     setLoading(false);

  //   }
  // };
  // useEffect(() => {
  //   //during mount phase
  //   fetchandupdate();

  // }, [])
  // console.log("hello", products)

  return (
    
    <div className="App">
      <Restaurants/>
      {/* <div id="product-display">
        <h1>Restaurants List</h1>
        <div style={{display:'grid',
      gridTemplateColumns:"repeat(3,1fr)", margin:"25px",gap:"20px"}}>
          {products.map((prod) => (
            <div key={prod.id} style={{border:"1px solid black", borderRadius:"30px",display:"grid",gridTemplateColumns:"repeat(2,1fr)",margin:"25px",gap:"20px"}}>
              <div> 
                <img src={prod.image} alt={prod.title} width="300px" height="300px"/>
              </div>
              <div>
                <h6>Name:{prod.name}</h6>
                <h6>Type:{prod.type}</h6>
                <h6>Price:{prod.price_starts_from}</h6>
                <h6>Rating:{prod.rating}</h6>
                <h6>Votes:{prod.number_of_votes}</h6>
              </div>



            </div>
          ))}
        </div>

      </div> */}

    </div>
  );
}
