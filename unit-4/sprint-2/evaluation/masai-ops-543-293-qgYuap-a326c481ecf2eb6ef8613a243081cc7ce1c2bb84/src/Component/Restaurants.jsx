import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import LoadingIndicator from "./LoadingIndicator";
// import Pagination from "./Pagination";



const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
}


function Restaurants() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  ///
  const[page,setPage]=useState(1);
  //
  const fetchandupdate = async (page) => {
    setLoading(true);
    try {
      let data = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
      setProducts(data.data);



      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);

    }
  };
  useEffect(() => {
    //during mount phase
    fetchandupdate(page);

  }, [page])
  console.log("hello", products)

  // return <LoadingIndicator />;
  return (
    loading ? <LoadingIndicator /> :
      <div>
        <h1 data-testid="restaurants-header">Restaurants List</h1>
        <div data-testid="restaurants-container">
          <div id="product-display">
            <div style={{
              display: 'grid',
              gridTemplateColumns: "repeat(3,1fr)", margin: "25px", gap: "20px"
            }}>
              {products.map((prod) => (
                <RestaurantCard name={prod.name} image={prod.image} type={prod.type} rating={prod.rating} price_starts_from={prod.price_starts_from} number_of_votes={prod.number_of_votes} />

                // <div key={prod.id} style={{border:"1px solid black", borderRadius:"30px",display:"grid",gridTemplateColumns:"repeat(2,1fr)",margin:"25px",gap:"20px"}}>
                //   <div> 
                //     <img style={{width:"auto",borderRadius:"30px"}} src={prod.image} alt={prod.title} width="300px" height="300px"/>
                //   </div>
                //   <div>
                //     <h6>Name:{prod.name}</h6>
                //     <h6>Type:{prod.type}</h6>
                //     <h6>Price:{prod.price_starts_from}</h6>
                //     <h6>Rating:{prod.rating}</h6>
                //     <h6>Votes:{prod.number_of_votes}</h6>
                //   </div>



                // </div>
              ))}
            </div>

          </div>
        </div>
        <div>
          {/* <Pagination/> */}
          <div data-testid="page-container">

            <button disabled={page == 1} onClick={() => setPage(page - 1)}>Previous</button>
            <button >{page}</button>
            <button disabled={page == 0} onClick={() => setPage(page + 1)}>Next</button>

          </div>

        </div>
      </div>
  );
}

export default Restaurants;
